---
url: summit2024/modelsigning.html
aliases: ['/schedule/modelsigning.html']
layout: summittalk
title: "ML Model Signing: Cryptographically paving the way to transparency in machine learning models"
topImage:
type: standard
room: Ziggy Stardust
start: 2024-10-11T10:00:00
speaker: Mihai Maruseac
speakerTitle: Google Open Source Security team (GOSST)
---

<div class="font-google font-medium">

How do I know where my machine learning model came from, and how can I prove it? This question has remained largely unanswered as adoption of machine learning and artificial intelligence has skyrocketed, with over 600,000 ML models freely available on model repositories like Hugging Face. Current cryptographic signing mechanisms are not designed with ML models in mind, nor are they fit for purpose largely due to one simple fact: models are not just a singular file. There are a number of disparate files in one directory (often several hundred gigabytes or more), comprising many bespoke formats only seen in the machine learning context.

We present an open-source specification and implementation to cryptographically sign an arbitrary collection of files which comprise an ML model, to create a mechanism to verify the integrity of a machine learning model to ensure trust between the model producer and end-user. By implementing model signing, we are paving the way for model transparency which helps strengthen the AI supply chain. With this, one could see who has trained the model, what training framework has been used, what datasets were used, and much other useful information.

* [Speaker Slides]({{< rel "/pdfs/summit2024/ML Model Signing.pdf">}})
* [Talk Recording](https://youtu.be/QHOzEkw_9d4?si=Sc0p3IL6Uty861C2)

---

### Speaker

Mihai Maruseac is a member of Google Open Source Security team (GOSST), working on Supply Chain Security for ML. Before joining GOSST, Mihai created the TensorFlow Security team after joining Google. Previously, he worked on a startup incorporating Differential Privacy (DP) within Machine Learning (ML) algorithms (now part of Snowflake). Mihai has a PhD in Differential Privacy from UMass Boston.