---
title: Simple Content Access entitlements with Insights Operator
---

# Simple Content Access entitlements with Insights Operator {#insights-operator-simple-access}

{{ insights_operator }} automates the import of Simple Content Access (SCA) entitlement certificates every 8 hours. These Red Hat Subscription Management (RHSM) certificates allow the cluster to authenticate with the Red Hat Content Delivery Network (CDN) to access subscription-governed content.

SCA supports multi-architecture clusters by generating architecture-specific secrets, such as `amd64` or `arm64`, in the `openshift-config-managed` namespace to ensure compatibility across all worker node types.

**Additional resources**

- [About simple content access](https://access.redhat.com/documentation/en-us/subscription_central/2021/html-single/getting_started_with_simple_content_access/index#assembly-about-simplecontent)
- [Using Red Hat subscriptions in builds](/openshift-docs-markdown/cicd/builds/running-entitled-builds#builds-running-entitled-builds-with-sharedsecret-objects_running-entitled-builds)
