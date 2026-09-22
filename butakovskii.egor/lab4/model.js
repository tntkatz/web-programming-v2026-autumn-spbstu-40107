// Экспортируйте класс и функции коллекций с именами из контракта вашего варианта.
export class User {
  constructor(id, name, friends = []) {
    this.id = Number(id);
    this.name = String(name);
    this.friends = Array.isArray(friends) ? friends.map(Number) : [];
  }

  addFriend(friendId) {
    const id = Number(friendId);
    if (!this.friends.includes(id)) {
      this.friends.push(id);
    }
  }

  removeFriend(friendId) {
    const id = Number(friendId);
    this.friends = this.friends.filter((fId) => fId !== id);
  }

  get friendCount() {
    return this.friends.length;
  }
}

export function groupUsersByFriendCount(users) {
  return users.reduce((acc, user) => {
    const count = user.friendCount;
    if (!acc[count]) {
      acc[count] = [];
    }
    acc[count].push(user);
    return acc;
  }, {});
}

export function getUniqueFriends(users) {
  const set = new Set();
  users.forEach((user) => {
    user.friends.forEach((fId) => set.add(fId));
  });
  return Array.from(set);
}

export function getUsersByCommonFriend(users, friendId) {
  const targetId = Number(friendId);
  return users.filter((user) => user.friends.includes(targetId));
}

export function getUsersWithFriendsGreaterThan(users, minFriends) {
  const threshold = Number(minFriends);
  return users.filter((user) => user.friendCount > threshold);
}

export function getUsersWithoutFriends(users) {
  return users.filter((user) => user.friendCount === 0);
}
