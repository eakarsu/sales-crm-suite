import { ensureListSeed, listPgPayloads, replacePgPayloads } from '@/lib/postgres';

export type NotificationItem = {
  id: string;
  title: string;
  detail: string;
  read: boolean;
};

const seed: NotificationItem[] = [
  { id: 'note-1', title: 'Pipeline risk spike', detail: 'Nine opportunities slipped stage movement thresholds.', read: false },
  { id: 'note-2', title: 'Quote approval approaching', detail: 'Enterprise quote package needs manager approval today.', read: false },
  { id: 'note-3', title: 'Outreach sequence updated', detail: 'Executive outbound sequence response handling changed.', read: true },
];

async function ensureStore() {
  await ensureListSeed('notifications', seed, 'notifications.json');
}

export async function getNotifications(): Promise<NotificationItem[]> {
  await ensureStore();
  return listPgPayloads<NotificationItem>('notifications');
}

export async function saveNotifications(items: NotificationItem[]) {
  await ensureStore();
  await replacePgPayloads('notifications', items);
}
