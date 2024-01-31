n,k = map(int, input().split())
inputs = [list(map(int, input().split())) for _ in range(k)]
seats, cnt = [], []
for i in range(n+1):
    seats.append(i)
    cnt.append(set([i]))

for _ in range(3):
    for a,b in inputs:
        seats[a],seats[b] = seats[b], seats[a]
        cnt[seats[a]].add(a)
        cnt[seats[b]].add(b)

for i in range(1,n+1):
    print(len(cnt[i]))