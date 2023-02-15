# Projekt Scrum Poker

### O projekcie
Aplikacja do rozgrywania scrumowego pokera

### TODO
Tematy do zrobienia:
* przekazać aktualnego użytkownika do stołu i jego podmodułów
* w czasie głosowania, anulowanie głosu nie przez ustawienie zera, ale jakoś inaczej
* panel głosowania frontend - poprawić wygląd, sposób zaznaczenia wybranek karty, etc.
* obsługa sprawdzania, kto już zagłosował - w stanie VOTING (modyfikacja api i backend)
* dodanie rezultatów na panelu z wynikami głosowania (api, frontend, backend)
* dodanie wartości na panelu z wynikami - w stanie REVIVING (api, backend i frontend)
* odświeżanie inicjowane przez serwer

### Working
* obsługa wysyłania głosów (api usługi, frontend serwis i jego wywołanie w panelu, backend obsluga zapisu wynikow w bazie)


### Done
* dodanie panelu dla głosującego (frontend - przyciski)
* wprowadzenie stanu w stole: gotowy, głosowanie, ujawnianie - pole w encji i na DTO prezentacja na froncie
* wprowadzenie komendy do zmiany stanu stołu: backend + panel dla admina na froncie


### Reference Documentation
For further reference, please consider the following sections:

* [Official Apache Maven documentation](https://maven.apache.org/guides/index.html)
* [Spring Boot Maven Plugin Reference Guide](https://docs.spring.io/spring-boot/docs/3.0.2/maven-plugin/reference/html/)
* [Create an OCI image](https://docs.spring.io/spring-boot/docs/3.0.2/maven-plugin/reference/html/#build-image)

