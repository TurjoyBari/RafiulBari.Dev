function buildYouTubeEmbedUrl(id) {
  const params = new URLSearchParams({
    autoplay: "1",
    mute: "1",
    rel: "0",
    modestbranding: "1",
    playsinline: "1",
  });
  return `https://www.youtube.com/embed/${id}?${params.toString()}`;
}

function buildVimeoEmbedUrl(id) {
  const params = new URLSearchParams({
    autoplay: "1",
    muted: "1",
    playsinline: "1",
  });
  return `https://player.vimeo.com/video/${id}?${params.toString()}`;
}

function isVideoFilePath(path) {
  return /\.(mp4|webm|ogg)(\?|$)/i.test(path);
}

export function getVideoEmbedInfo(url) {
  if (!url) return { type: null, embedUrl: null };

  const trimmed = url.trim();

  if (trimmed.startsWith("/") && isVideoFilePath(trimmed)) {
    return { type: "file", embedUrl: trimmed };
  }

  if (isVideoFilePath(trimmed) && !trimmed.startsWith("http")) {
    return { type: "file", embedUrl: trimmed.startsWith("/") ? trimmed : `/${trimmed}` };
  }

  try {
    const parsed = new URL(trimmed);

    if (parsed.hostname.includes("youtube.com") || parsed.hostname.includes("youtube-nocookie.com")) {
      const embedMatch = parsed.pathname.match(/\/embed\/([^/?]+)/);
      if (embedMatch?.[1]) {
        return { type: "youtube", embedUrl: buildYouTubeEmbedUrl(embedMatch[1]) };
      }

      const shortsMatch = parsed.pathname.match(/\/shorts\/([^/?]+)/);
      if (shortsMatch?.[1]) {
        return { type: "youtube", embedUrl: buildYouTubeEmbedUrl(shortsMatch[1]) };
      }

      const id = parsed.searchParams.get("v");
      if (id) {
        return { type: "youtube", embedUrl: buildYouTubeEmbedUrl(id) };
      }
    }

    if (parsed.hostname.includes("youtu.be")) {
      const id = parsed.pathname.split("/").filter(Boolean)[0];
      if (id) {
        return { type: "youtube", embedUrl: buildYouTubeEmbedUrl(id) };
      }
    }

    if (parsed.hostname.includes("vimeo.com")) {
      const id = parsed.pathname.split("/").filter(Boolean).pop();
      if (id && /^\d+$/.test(id)) {
        return { type: "vimeo", embedUrl: buildVimeoEmbedUrl(id) };
      }
    }

    if (isVideoFilePath(parsed.pathname)) {
      return { type: "file", embedUrl: trimmed };
    }
  } catch {
    if (isVideoFilePath(trimmed)) {
      return { type: "file", embedUrl: trimmed.startsWith("/") ? trimmed : `/${trimmed}` };
    }
  }

  return { type: null, embedUrl: null };
}
