---
title: Red Hat OpenShift Cluster Manager
---

# Red Hat OpenShift Cluster Manager {#ocm-overview-ocp}

{{ cluster_manager_first }} is a managed service where you can install, modify, operate, and upgrade your Red Hat OpenShift clusters. This service allows you to work with all of your organization´s clusters from a single dashboard.

{{ cluster_manager }} guides you to install {{ OCP }}, {{ rosa_classic_title }}, {{ hcp_title_first }}, and {{ dedicated }} clusters. It is also responsible for managing both {{ OCP }} clusters after self-installation as well as your {{ rosa_classic_title }} and {{ dedicated }} clusters.

You can use {{ cluster_manager }} to do the following actions:

- Create new clusters
- View cluster details and metrics
- Manage your clusters with tasks such as scaling, changing node labels, networking, authentication
- Manage access control
- Monitor clusters
- Schedule upgrades

## General actions {#ocm-general-actions-ocp}

On the top right of the cluster page, there are some actions that a user can perform on the entire cluster:

- ***Open console*** launches a web console so that the cluster owner can issue commands to the cluster.
- ***Actions*** drop-down menu allows the cluster owner to rename the display name of the cluster, change the amount of load balancers and persistent storage on the cluster, if applicable, manually set the node count, and delete the cluster.
- ***Refresh*** icon forces a refresh of the cluster.

## Cluster tabs {#ocm-cluster-tabs-ocp}

Selecting an active, installed cluster shows tabs associated with that cluster. The following tabs display after the cluster’s installation completes:

- Overview
- Access control
- Add-ons
- Networking
- Machine pools
- {{ red_hat_lightspeed }} Advisor
- Support
- Settings

## Additional resources {#ocm-additional-resources-ocp}

- For the complete documentation for {{ cluster_manager }}, see [{{ cluster_manager }} documentation](https://access.redhat.com/documentation/en-us/openshift_cluster_manager/2022/html-single/managing_clusters/index).
