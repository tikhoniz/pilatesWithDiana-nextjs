import { notFound } from 'next/navigation';

// отлавливает все не зарегистрированные роуты и вызывает функцию notFound()
export default function CatchAllPage() {
  notFound();
}
