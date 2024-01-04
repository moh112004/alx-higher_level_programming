#ifndef LISTS_H
#define LISTS_H

#include <stdlib.h>

/**
 * struct listint_s - singly linked list
 * @a: integer
 * @b: points to the next node
 */
typedef struct listint_s
{
	int a;
	struct listint_s *b;
} listint_t;

size_t print_listint(const listint_t *h);
listint_t *add_nodeint(listint_t **head, const int a);
void free_listint(listint_t *head);
int check_cycle(listint_t *list);

#endif /* LISTS_H */
