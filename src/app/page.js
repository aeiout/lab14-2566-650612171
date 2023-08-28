"use client";
import {
  Button,
  Container,
  Divider,
  Group,
  Pagination,
  Rating,
  Text,
  Textarea,
  Title,
} from "@mantine/core";

export default function FoodReviewPage() {
  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>
      <Title order={4} mt={"sm"}>
        Your rating
      </Title>
      <Rating defaultValue={0} size="lg"></Rating>
      <Textarea
        placeholder="Do you enjoy eating?"
        label="Your review"
        mt={"xs"}
        minRows={3}
      />
      <Button color="orange" mt={"xs"}>
        Submit Review
      </Button>
      <Divider my={"sm"} />
      <Group position="center">
        <Title order={4}>Elon Musk</Title>
        <Rating defaultValue={5} size="sm"></Rating>
      </Group>
      <Group position="center">
        <Text color="dimmed">
          Best pizza in this world. I give you X score.
        </Text>
      </Group>

      <Divider my={"sm"} />
      <Group position="center">
        <Title order={4}>Mark Zuck</Title>
        <Rating defaultValue={4} size="sm"></Rating>
      </Group>
      <Group position="center">
        <Text color="dimmed">My favourite part is pepperoni</Text>
      </Group>
      <Pagination total={20} color="orange" position="center" mt={"md"} />
      <Text align="center" color="dimmed" my="sm">
        Copyright © 2023 Ueaarthorn Uawongtrakul 650612171
      </Text>
    </Container>
  );
}
