---
title: Resource quotas across multiple projects
---

# Resource quotas across multiple projects {#setting-quotas-across-multiple-projects}

A multi-project quota, defined by a `ClusterResourceQuota` object, shares quotas across multiple projects. The system aggregates the resources used in each selected project and applies the aggregate limit across all selected projects.

This guide describes how cluster administrators can set and manage resource quotas across multiple projects.
