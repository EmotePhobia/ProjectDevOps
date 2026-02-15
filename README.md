# ProjectDevOps
# ProjectDevOps – Node.js + Express + CI/CD

Projekt zaliczeniowy z zakresu DevOps.

Aplikacja REST API napisana w Node.js (Express), zautomatyzowana przy użyciu GitHub Actions (CI) oraz wdrożona do Azure Web App (CD).

---

##  Opis projektu

Aplikacja udostępnia dwa endpointy:

- `/` – zwraca komunikat powitalny
- `/products` – zwraca przykładową listę produktów

Projekt zawiera:
- testy jednostkowe (Jest)
- pipeline CI (automatyczne testy przy PR)
- ochronę brancha `main`
- wdrożenie do Azure Web App
- publiczny dostęp do aplikacji

---

##  Live Application

- https://appkadevops-dke5emd0fwe7ftgq.azurewebsites.net

Endpointy:
- https://appkadevops-dke5emd0fwe7ftgq.azurewebsites.net/
- https://appkadevops-dke5emd0fwe7ftgq.azurewebsites.net/products

---

##  Technologie

- Node.js 20 LTS
- Express.js
- Jest
- GitHub Actions (CI)
- Azure Web App (Linux)
- Local Git Deployment

---

##  Uruchomienie lokalne

### 1. Klonowanie repozytorium

```bash
git clone <https://github.com/EmotePhobia/ProjectDevOps.git>
cd ProjectDevOps

### 1. Klonowanie repozytorium
