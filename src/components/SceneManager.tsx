"use client";

import { Suspense } from 'react';
import Experience from './Experience';
import LoadingScene from './LoadingScene';

export default function SceneManager() {
  return (
    <Suspense fallback={<LoadingScene />}>
      <Experience />
    </Suspense>
  );
}