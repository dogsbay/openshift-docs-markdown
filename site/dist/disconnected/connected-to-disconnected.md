---
title: Converting a connected cluster to a disconnected cluster
---

# Converting a connected cluster to a disconnected cluster {#connected-to-disconnected}

You can convert your OpenShift Container Platform cluster from a connected cluster to a disconnected cluster.

A disconnected cluster, also known as a restricted cluster, does not have an active connection to the internet. As such, you must mirror the contents of your registries and installation media. You can create this mirror registry on a host that can access both the internet and your closed network, or copy images to a device that you can move across network boundaries.

**Additional resources**

- [Red Hat Quay](https://www.redhat.com/en/technologies/cloud-computing/quay)
- [JFrog Artifactory](https://jfrog.com/artifactory/)
- [Sonatype Nexus Repository](https://www.sonatype.com/products/repository-oss?topnav=true)
- [Harbor](https://goharbor.io/)
- [Deploying Red Hat Quay for proof-of-concept purposes](https://docs.redhat.com/en/documentation/red_hat_quay/3/html/proof_of_concept_-_deploying_red_hat_quay)
- [Deploying Red Hat Quay by using the Quay Operator](https://access.redhat.com/documentation/en-us/red_hat_quay/3/html/deploying_the_red_hat_quay_operator_on_openshift_container_platform/index)
- [Red Hat Quay documentation on organizations](https://access.redhat.com/documentation/en-us/red_hat_quay/3/html-single/use_red_hat_quay/index#user-org-intro_use-quay)

**Additional resources**

- [Mirroring an Operator catalog](/disconnected/using-olm#olm-mirror-catalog_olm-restricted-networks)
- [OpenShift CLI administrator command reference](/cli_reference/openshift_cli/administrator-cli-commands#oc-adm-catalog-mirror)

**Additional resources**

- [Disabling the {{ insights_operator }}](/support/remote_health_monitoring/remote-health-reporting#insights-operator-new-pull-secret-disabled_remote-health-reporting)

**Additional resources**

- [{{ red_hat_lightspeed }}](https://console.redhat.com)
