---
title: Creating applications using Ruby on Rails
---

# Creating applications using Ruby on Rails {#templates-using-ruby-on-rails}

You can build and deploy a Ruby on Rails 4 application on OpenShift Container Platform by developing it locally.

Store the source in Git, then deploy the database, frontend, and route services. With this process, you can validate your application locally before deploying it to the cluster as a set of distinct services.

> [!WARNING]
> You must complete each part of this tutorial in order to before you deploy your application on OpenShift Container Platform. If a step fails, confirm that every preceding step completed successfully before you continue.

## Prerequisites {#_prerequisites}

- You have basic Ruby on Rails knowledge.
- You have Ruby 2.0.0+, Rubygems, and Bundler installed locally.
- You have basic Git knowledge.
- You have a running instance of OpenShift Container Platform 4.
- The {{ oc_first }} installed.
- You are logged into a running OpenShift Container Platform cluster.
