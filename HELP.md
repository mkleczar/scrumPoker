# Projekt Scrum Poker

### O projekcie
Aplikacja do rozgrywania scrumowego pokera

### TODO
Tematy do zrobienia:
* wprowadzenie enumów do statusów i innychtego typu miejsc
* przerobienie komponentów użytych w table na dummy components (z @Input i @Output)
* query params w formie observera
* table jako osobny moduł?
* znacznik w czasie głosowania, że wszyscy uprawnieni już zagłosowali
* lepsze ustawienie komponentów na ekranie
* przeniesienie styli do plików CSS (stworzenie i użycie wspólnych klas)
* wykres dystrybucji głosów powinien się sam odświeżać
* przycisk na panelu uczestników przy aktualnej osobie, do opuszczenia stołu
* sygnalizacja, że brak admina
* w czasie głosowania, anulowanie głosu nie przez ustawienie zera, ale jakoś inaczej
* lepszy panel głosowania, oddający różnicę pomiędzy poszczególnymi opcjami
* dynamiczna, wczytywana z bazy skala, możliwa do zmiany przez administratora na stole
* inny kolor tła, dla różnego typu aktorów np: PLAYER - zielony, ADMIN - żółty, SPECTATOR - niebieski

### Working


### Done
* odświeżanie inicjowane przez serwer
* panel głosowania frontend - poprawić wygląd, sposób zaznaczenia wybranek karty, etc.
* przekazać aktualnego użytkownika do stołu i jego podmodułów
* obsługa sprawdzania, kto już zagłosował - w stanie VOTING (modyfikacja api i backend)
* dodanie rezultatów na panelu z wynikami głosowania (api, frontend, backend)
* dodanie wartości na panelu z wynikami - w stanie REVIVING (api, backend i frontend)
* obsługa wysyłania głosów (api usługi, frontend serwis i jego wywołanie w panelu, backend obsluga zapisu wynikow w bazie)
* dodanie panelu dla głosującego (frontend - przyciski)
* wprowadzenie stanu w stole: gotowy, głosowanie, ujawnianie - pole w encji i na DTO prezentacja na froncie
* wprowadzenie komendy do zmiany stanu stołu: backend + panel dla admina na froncie


### Reference Documentation
For further reference, please consider the following sections:

* [Official Apache Maven documentation](https://maven.apache.org/guides/index.html)
* [Spring Boot Maven Plugin Reference Guide](https://docs.spring.io/spring-boot/docs/3.0.2/maven-plugin/reference/html/)
* [Create an OCI image](https://docs.spring.io/spring-boot/docs/3.0.2/maven-plugin/reference/html/#build-image)

