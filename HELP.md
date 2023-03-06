# Projekt Scrum Poker

### O projekcie
Aplikacja do rozgrywania scrumowego pokera

### TODO
Tematy do zrobienia:
* przycisk na liście Players na stole do opuszczania stołu
* dodanie środowiska, które będzie przechowywać np: url backendu
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

### TODO second version
* na liście stołów dodać licznik obecnych osób

### Working


### Done
* usuwanie stołów z listy - tylko gdy są puste (obsługa błędu na messageService)
* zablokowanie możliwości dodania do stołu osoby o takim samym imieniu i o pustym imieniu
* zablokowanie możliwości dodania listy o pustej nazwie
* jeżeli brak stołów, to wyświetla się komunikat a nie pusta tabela
* wyświetlanie błędów z serwera w formie pasków
* wprowadzenie enumów do statusów i innychtego typu miejsc
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

