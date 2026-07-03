"use client";

import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import LogoGithub from "@gravity-ui/icons/LogoGithub";
import { SITE } from "@/constants/site";
import { fadeUp } from "@/utils/animations";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal, { ScrollRevealItem } from "@/components/ui/ScrollReveal";
import AnimatedButton from "@/components/ui/AnimatedButton";

const LEVEL_COLORS = [
  "bg-white/[0.04]",
  "bg-[#BFA181]/25",
  "bg-[#BFA181]/40",
  "bg-[#BFA181]/55",
  "bg-[#BFA181]/75",
];

function groupContributionsByWeek(contributions) {
  if (!contributions?.length) return [];

  const weeks = [];
  let currentWeek = [];

  contributions.forEach((day, index) => {
    const dayOfWeek = new Date(day.date).getDay();
    if (index === 0 && dayOfWeek !== 0) {
      for (let i = 0; i < dayOfWeek; i++) currentWeek.push(null);
    }
    currentWeek.push(day);
    if (dayOfWeek === 6 || index === contributions.length - 1) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  });

  return weeks;
}

function GithubSkeleton() {
  return (
    <div className="space-y-8" aria-label="Loading GitHub stats">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="glass-card p-5">
            <div className="skeleton mb-3 h-4 w-24" />
            <div className="skeleton h-8 w-16" />
          </div>
        ))}
      </div>
      <div className="glass-card p-6">
        <div className="skeleton mb-4 h-4 w-32" />
        <div className="flex gap-1 overflow-hidden">
          {Array.from({ length: 52 }).map((_, i) => (
            <div key={i} className="flex flex-col gap-1">
              {Array.from({ length: 7 }).map((_, j) => (
                <div key={j} className="skeleton h-3 w-3 rounded-sm" />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value }) {
  return (
    <motion.div variants={fadeUp} className="glass-card p-6 sm:p-7">
      <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-text-muted">
        {label}
      </p>
      <p className="stat-value mt-3 text-2xl font-bold sm:text-3xl">
        {value ?? "—"}
      </p>
    </motion.div>
  );
}

export default function GithubStats() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function fetchGithubData() {
      try {
        setLoading(true);
        setError(false);

        const res = await fetch("/api/github", { cache: "no-store" });

        if (!res.ok) throw new Error("GitHub API failed");

        const json = await res.json();
        if (cancelled) return;

        setData(json);
      } catch {
        if (!cancelled) setError(true);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchGithubData();
    return () => {
      cancelled = true;
    };
  }, []);

  const weeks = useMemo(
    () => groupContributionsByWeek(data?.contributions || []),
    [data?.contributions]
  );

  const profileUrl = data?.profileUrl || `https://github.com/${SITE.githubUsername}`;

  return (
    <section id="github" aria-label="GitHub Contributions" className="section-padding relative">
      <div aria-hidden="true" className="section-divider" />
      <div className="section-container">
        <SectionHeading
          title="GitHub Contributions"
          subtitle="My daily coding activity on GitHub. Every commit tells a story of learning and growth."
        />

        {loading ? (
          <GithubSkeleton />
        ) : error || !data ? (
          <>
            <GithubSkeleton />
            <p className="mt-4 text-center text-sm text-text-muted">
              Unable to load live GitHub data. Please try again later.
            </p>
          </>
        ) : (
          <ScrollReveal stagger staggerSpeed="fast">
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              <ScrollRevealItem>
                <StatCard label="Current Streak" value={`${data.streak} days`} />
              </ScrollRevealItem>
              <ScrollRevealItem>
                <StatCard
                  label="Total Contributions"
                  value={data.totalContributions.toLocaleString()}
                />
              </ScrollRevealItem>
              <ScrollRevealItem>
                <StatCard label="Repositories" value={data.repositories} />
              </ScrollRevealItem>
              <ScrollRevealItem>
                <StatCard label="Open Source" value={data.openSource} />
              </ScrollRevealItem>
            </div>

            <ScrollRevealItem>
              <motion.div
                variants={fadeUp}
                className="glass-card glass-card-lg mt-8 overflow-hidden p-6 sm:p-8"
              >
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-sm font-medium text-text-secondary">
                    Contribution Graph — @{data.username}
                  </p>
                  <div className="flex items-center gap-1 text-xs text-text-muted">
                    <span>Less</span>
                    {LEVEL_COLORS.map((color, i) => (
                      <span key={i} className={`h-3 w-3 rounded-sm ${color}`} />
                    ))}
                    <span>More</span>
                  </div>
                </div>

                <div className="overflow-x-auto pb-2">
                  <div className="flex min-w-max gap-[3px]">
                    {weeks.map((week, weekIndex) => (
                      <div key={weekIndex} className="flex flex-col gap-[3px]">
                        {week.map((day, dayIndex) =>
                          day ? (
                            <div
                              key={day.date}
                              title={`${day.count} contributions on ${day.date}`}
                              className={`heatmap-cell h-3 w-3 ${
                                LEVEL_COLORS[day.level] || LEVEL_COLORS[0]
                              }`}
                            />
                          ) : (
                            <div
                              key={`empty-${weekIndex}-${dayIndex}`}
                              className="h-3 w-3"
                            />
                          )
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </ScrollRevealItem>

            <ScrollRevealItem>
              <motion.div variants={fadeUp} className="mt-8 flex justify-center">
                <AnimatedButton
                  href={profileUrl}
                  external
                  icon={<LogoGithub width={18} height={18} />}
                >
                  View Full Profile
                </AnimatedButton>
              </motion.div>
            </ScrollRevealItem>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
