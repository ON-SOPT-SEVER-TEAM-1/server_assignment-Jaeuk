# Node.js

## Node.js VS Spring

### Spring MVC

- Thread를 여러개 두어 다중 요청을 동시에 처리합니다.
- Multi-Thread 방식에서 I/O 작업이 수반된다면 자원의 낭비가 발생됩니다.

### Node.js

- Single Thread로 모든 요청을 처리합니다.
- Multi-Thread의 Spring과 Node.js가 비교될 수 있는 이유는 노드가 완전한 async - non_blocking 방식의 I/O 작업을 수용하기 때문입니다.

## ***그래서 Node.js가 Spring MVC보다 성능상 유리할까?***

Node.js가 Spring 보다 성능상 우위에 있다고 말하기 위해선 전제조건이 있습니다.

- 다중처리를 동시에 처리하도록 요구된다.
- 많은 I/O 작업을 수행한다.
- 단순한 CPU 작업만을 진행한다.

> Note: 위와 같은 전제조건은 전형적인 '웹 애플리케이션의 특징' 입니다.

[출처 : https://siyoon210.tistory.com/164](https://siyoon210.tistory.com/164)