import * as THREE from 'three'

export function patchThreeLoadingManager() {
  if (typeof window === 'undefined') return;

  const manager: any = THREE.DefaultLoadingManager;
  const orig = {
    onStart: manager.onStart,
    onLoad: manager.onLoad,
    onProgress: manager.onProgress,
    onError: manager.onError,
  }

  const defer = 
    (fn?: Function) =>
    (...args: any[]) =>
      fn && setTimeout(() => fn(...args), 0);

  manager.onStart = defer(orig.onStart);
  manager.onLoad = defer(orig.onLoad);
  manager.onProgress = defer(orig.onProgress);
  manager.onError = defer(orig.onError);
}