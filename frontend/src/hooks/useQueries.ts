import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { Contact, Notification, Partner } from '../backend';

export function useSubmitContact() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      name,
      email,
      phone,
      message,
    }: {
      name: string;
      email: string;
      phone: string;
      message: string;
    }) => {
      if (!actor) throw new Error('Actor not initialized');
      return await actor.submitContact(name, email, phone, message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contacts'] });
    },
  });
}

export function useGetAllContacts() {
  const { actor, isFetching } = useActor();

  return useQuery<Contact[]>({
    queryKey: ['contacts'],
    queryFn: async () => {
      if (!actor) return [];
      return await actor.getAllContacts();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetContactCount() {
  const { actor, isFetching } = useActor();

  return useQuery<bigint>({
    queryKey: ['contact-count'],
    queryFn: async () => {
      if (!actor) return BigInt(0);
      return await actor.getContactCount();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetAllNotifications() {
  const { actor, isFetching } = useActor();

  return useQuery<Notification[]>({
    queryKey: ['notifications'],
    queryFn: async () => {
      if (!actor) return [];
      return await actor.getAllNotifications();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetPartners() {
  const { actor, isFetching } = useActor();

  return useQuery<Partner[]>({
    queryKey: ['partners'],
    queryFn: async () => {
      if (!actor) return [];
      return await actor.getPartners();
    },
    enabled: !!actor && !isFetching,
  });
}
