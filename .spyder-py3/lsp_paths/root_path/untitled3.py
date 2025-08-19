import pygame
import random

# Khởi tạo Pygame
pygame.init()

# Cài đặt màn hình
width, height = 400, 400
screen = pygame.display.set_mode((width, height))
pygame.display.set_caption("Snake Game")

# Color #
BLACK = (0, 0, 0)
WHITE = (255, 255, 255)
RED = (255, 0, 0)

# Data structure #
block_size = 20
speed = 15

# Dimension #
x, y = width // 2, height // 2
dx, dy = 0, 0
snake = [[x, y]]
length = 1

# Create food resources #
food_x = round(random.randrange(0, width - block_size) / block_size) * block_size
food_y = round(random.randrange(0, height - block_size) / block_size) * block_size

# time start and end #
clock = pygame.time.Clock()
running = True

while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
        if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_LEFT and dx != block_size:
                dx, dy = -block_size, 0
            elif event.key == pygame.K_RIGHT and dx != -block_size:
                dx, dy = block_size, 0
            elif event.key == pygame.K_UP and dy != block_size:
                dx, dy = 0, -block_size
            elif event.key == pygame.K_DOWN and dy != -block_size:
                dx, dy = 0, block_size

    # location update #
    x += dx   # means x = x + dx #
    y += dy   # means x = x + dy #
    head = [x, y]
    snake.append(head)

    # remain lengthy #
    if len(snake) > length:
        snake.pop(0)

    # Check the collision #
    if x < 0 or x >= width or y < 0 or y >= height or head in snake[:-1]:
        running = False

    # eating food #
    if x == food_x and y == food_y:
        length += 1
        food_x = round(random.randrange(0, width - block_size) / block_size) * block_size
        food_y = round(random.randrange(0, height - block_size) / block_size) * block_size

    # Color the snake with black, red, white #
    screen.fill(BLACK)
    pygame.draw.rect(screen, RED, [food_x, food_y, block_size, block_size])
    for segment in snake:
        pygame.draw.rect(screen, WHITE, [segment[0], segment[1], block_size, block_size])

    pygame.display.update()  # Dùng update thay flip để tương thích tốt hơn
    clock.tick(speed)

pygame.quit()