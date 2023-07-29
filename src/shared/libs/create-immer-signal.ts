import { produce } from 'immer';
import { createSignal } from 'solid-js';

// Это так, для отработки технологий)) Это не очень-то и эффективно, в отличие от варианта ниже
export const createImmerableSignal = <T>(value: T) => {
  const [getValue, setValue] = createSignal<T>(value);

  const immerableSetValue = (callback: (draft: T) => T) => {
    const newValue = produce(getValue(), callback);
    return setValue(newValue as Parameters<typeof setValue>[0]);
  };

  return [getValue, immerableSetValue] as [
    ReturnType<typeof createSignal<T>>[0],
    (callback: (draft: T) => any) => T,
  ];
};

export const _createImmerableSignal = <T>(value: T) => {
  // Тут, конечно, можно добавить, как в варианте с использованием Immer, фичу:
  // менять draft без return. Но будем изобретать какой-то второй Immer для специфичного кейса
  return createSignal<T>(value, { equals: false });
};
