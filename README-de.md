# **Next.js Coding Challenge: Gamer Discussion Snippets**

![pixy-coding-challenge](https://raw.githubusercontent.com/company-recruitment/coding-challenge/main/assets/pixy-coding-challenge.png)

[![language](https://img.shields.io/badge/language-English-121212.svg?style=for-the-badge&labelColor=121212f2&color=9945FF)](https://github.com/company-recruitment/coding-challenge/blob/main/README.md)
[![language](https://img.shields.io/badge/language-German-121212.svg?style=for-the-badge&labelColor=121212f2&color=9945FF)](https://github.com/company-recruitment/coding-challenge/blob/main/README-de.md)

Hi 👋! Vielen Dank, dass du dir die Zeit nimmst, an dieser Coding-Challenge teilzunehmen. Deine Aufgabe ist es, eine kleine, aber funktionale Webanwendung zu entwickeln, die eine grundlegende Diskussionsfunktion bietet. Diese Aufgabe soll uns einen Einblick in deine Fähigkeiten in Next.js, Tailwind CSS, PostgreSQL (Supabase), und die Integration von UI-Komponenten von [nyxbui.design](https://nyxbui.design) geben.

#### **Was wir erwarten**

Wir erwarten, dass diese Aufgabe etwa 2-3 Stunden dauert. Der Fokus liegt darauf, sauberen, gut strukturierten Code zu schreiben und die wichtigsten Funktionen zu implementieren.

#### **Die Challenge**

Entwickle eine einfache Anwendung, die es Nutzern ermöglicht, **kurze Diskussions-Snippets** zu erstellen und anzuzeigen. Diese Snippets könnten als kurze Meinungsäußerungen oder Fragen zu einem bestimmten Spiel oder Thema gedacht sein.

**Funktionalitäten:**

1. **Erstellen und Anzeigen von Snippets:**

   -  Nutzer sollen über ein einfaches Formular kurze Diskussionsbeiträge (Snippets) erstellen können.
   -  Diese Snippets werden in einer PostgreSQL-Datenbank gespeichert (via Supabase).
   -  Eine Liste der Snippets wird auf der Hauptseite angezeigt.

2. **Nutzung von `nyxbui.design` Komponenten:**
   -  Verwende Komponenten von `nyxbui.design` für das Formular und die Darstellung der Snippets.

#### **Datenbankanforderungen**

-  **Pflichtanforderung:** Die Anwendung muss eine Datenbankstruktur enthalten, die es ermöglicht, Diskussions-Snippets zu speichern und abzurufen.
-  **Offen lassen:** Es liegt an dir, wie du die Datenbankstruktur gestaltest. Überlege, welche Informationen gespeichert werden sollten (z.B. Inhalt, Zeitstempel, Benutzerinformationen, etc.) und wie du diese am besten strukturierst.

#### **Supabase-Setup**

Um sicherzustellen, dass alle Bewerber eine optimale Erfahrung haben, wirst du dein eigenes Supabase-Projekt einrichten. Hier ist eine Schritt-für-Schritt-Anleitung:

1. **Erstelle ein Supabase-Konto:**

   -  Gehe zu [supabase.com](https://supabase.com) und melde dich an.
   -  Erstelle ein neues Projekt. Notiere dir die `API URL` und den `anon key`, die du später benötigst.

2. **Erstelle die notwendige(n) Tabelle(n):**

   -  Überlege dir, welche Tabellen du benötigst und welche Spalten sinnvoll sind. Dies könnte z.B. eine Tabelle für die Snippets sein, in der der Inhalt und weitere relevante Informationen gespeichert werden.

3. **Konfiguriere dein Next.js-Projekt:**

   -  Verwende die bereitgestellte `.env.local.example`-Datei, um die Supabase-URL und den anon key in deiner `.env.local`-Datei zu konfigurieren:

   ```plaintext
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_KEY=your-anon-key
   ```

4. **Installiere Supabase:**

   -  Falls noch nicht geschehen, installiere das Supabase-JavaScript-SDK:

   ```bash
   npm install @supabase/supabase-js
   ```

5. **Verbinde dein Projekt mit Supabase:**
   -  In deinem Next.js-Projekt kannst du jetzt die Supabase-Client-Bibliothek verwenden, um auf deine Datenbank zuzugreifen.

#### **Vorkonfiguriertes Projekt**

Wir stellen dir ein Basisprojekt zur Verfügung, das mit Next.js, Tailwind CSS und `nyxbui.design` vorkonfiguriert ist. Du musst es nur klonen und die oben beschriebenen Schritte ausführen, um Supabase einzurichten.

1. **Clone the repository:**

   ```bash
   git clone https://github.com/company-recruitment/coding-challenge.git
   cd coding-challenge
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

#### **FAQs**

-  **Was ist, wenn ich Schwierigkeiten habe, Supabase einzurichten?** Die Supabase-Dokumentation ist ein guter Ausgangspunkt. Diese Aufgabe ist auch dazu gedacht, deine Fähigkeit zu testen, neue Tools zu verwenden und dich selbstständig zurechtzufinden.
-  **Soll ich bestimmte Features implementieren?** Du kannst die Features priorisieren, die du für am wichtigsten hältst. Wir suchen nach einer soliden Grundlage, die zeigt, wie du Herausforderungen löst.

#### **Viel Erfolg! 💪**

Sobald du fertig bist, sende uns eine Bestätigungs-E-Mail. Nach deiner Einreichung werden wir uns mit dir in Verbindung setzen.
