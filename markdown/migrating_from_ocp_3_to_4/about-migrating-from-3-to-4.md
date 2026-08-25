---
title: About migrating from OpenShift Container Platform 3 to 4
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# About migrating from {{ product_title }} 3 to 4 {id="about-migrating-from-3-to-4"}
{%- set context = "about-migrating-from-3-to-4" %}

{{ product_title }} 4 contains new technologies and functionality that result in a cluster that is self-managing, flexible, and automated. {{ product_title }} 4 clusters are deployed and managed very differently from {{ product_title }} 3.

The most effective way to migrate from {{ product_title }} 3 to 4 is by using a CI/CD pipeline to automate deployments in an [application lifecycle management](https://www.redhat.com/en/topics/devops/what-is-application-lifecycle-management-alm) framework.

You can use Red Hat Advanced Cluster Management for Kubernetes to help you import and manage your {{ product_title }} 3 clusters easily, enforce policies, and redeploy your applications. Take advantage of the [free subscription](https://www.redhat.com/en/engage/free-access-redhat-e-202202170127) to use Red Hat Advanced Cluster Management to simplify your migration process.

To successfully transition to {{ product_title }} 4, review the following information:


[Differences between {{ product_title }} 3 and 4](/migrating_from_ocp_3_to_4/planning-migration-3-4#planning-migration-3-4)
:   *   Architecture
    *   Installation and upgrade
    *   Storage, network, logging, security, and monitoring considerations