{%- set _mod_docs_content_type = "REFERENCE" %}
# RHSA-2026:57365 - {{ product_title }} {{ product_version }}.11 bug fix and security update {id="zstream-4-22-11_{{ context }}"}

Issued: 25 August 2026

{{ product_title }} release {{ product_version }}.11 is now available with updates to packages and images that fix several bugs. The list of bug fixes that are included in the update is documented in the [RHSA-2026:57365](https://access.redhat.com/errata/RHSA-2026:57365) advisory. The RPM packages that are included in the update are provided by the [RHSA-2026:57361](https://access.redhat.com/errata/RHSA-2026:57361) advisory. {._abstract}

Space precluded documenting all of the container images for this release in the advisory.

You can view the container images in this release by running the following command:

```terminal
$ oc adm release info 4.22.11 --pullspecs
```

## Fixed issues {id="zstream-4-22-11-fixed-issues_{{ context }}"}

*   Before this update, the {{ product_title }} web console used the identity UID as the settings key, and that UID differed across identity providers. As a consequence, the {{ product_title }} web console created a duplicate `user-settings` `ConfigMap` object each time you logged in if you had multiple identity providers such as LDAP and OpenID. With this release, the console now uses a stable hash of your user name as the settings key instead of the identity UID and automatically migrates existing settings on upgrade. As a result, the {{ product_title }} web console reuses a single `user-settings` `ConfigMap` object per user across all identity providers and login sessions. ([OCPBUGS-87832](https://issues.redhat.com/browse/OCPBUGS-87832))
*   Before this update, when you navigated to a **Terminal** tab of a node in the {{ product_title }} web console, the component checked for the debug pod even if the pod was still being created. As a consequence, a `Debug pod not found or was deleted.` error appeared before the terminal loaded successfully. With this release, a loading spinner is shown when the debug pod is being created, and the cleanup logic guards against an undefined namespace to prevent errors on early unmount. As a result, the **Terminal** tab of a node loads without displaying a false error message. ([OCPBUGS-100402](https://issues.redhat.com/browse/OCPBUGS-100402))
*   Before this update, the Cluster Monitoring Operator did not specify resource limits for some of its managed components. As a consequence, in clusters with limited resources, these components could be evicted due to memory pressure. With this release, the Cluster Monitoring Operator now sets appropriate resource limits for all managed components. As a result, components are less likely to be evicted in resource-constrained environments. ([OCPBUGS-105190](https://issues.redhat.com/browse/OCPBUGS-105190))
*   Before this update, the `azure-disk` CSI driver controller attempted to read the `kube-system/azure-cloud-provider` secret. As a consequence, the controller could crash when reading this secret. With this release, the `azure-disk` CSI driver controller no longer attempts to read the `kube-system/azure-cloud-provider` secret and instead falls back to `AZURE_CREDENTIAL_FILE` unconditionally. As a result, the `azure-disk` CSI driver controller no longer crashes. ([OCPBUGS-106152](https://issues.redhat.com/browse/OCPBUGS-106152))
*   Before this update, the `kas-connection-checker` deployment created in the `kube-system` namespace of a hosted cluster did not set a security context. Because the `kube-system` is an exempt from both SCC and Pod Security admission, no UID was assigned. As a consequence, the `kas-connection-checker` pods ran as root (UID 0) in the hosted cluster even though the workload does not need elevated privileges. With this release, an explicit non-root security context is set for the `kas-connection-checker` pods. As a result, the pods no longer run as root. ([OCPBUGS-111083](https://issues.redhat.com/browse/OCPBUGS-111083))
*   Before this update, the Go OpenSSL FIPS provider could potentially overwhelm the `libcrypto` library with concurrent requests. As a consequence, processes could hit the `maxThreads` limit of 10,000 and crash. With this release, the Go OpenSSL FIPS provider is updated to limit concurrent requests to the `libcrypto` library to four times the number of CPUs, buffering requests as lightweight Go routines. As a result, processes avoid the `maxThreads` limit and do not crash. ([OCPBUGS-112084](https://issues.redhat.com/browse/OCPBUGS-112084))

## Updating {id="zstream-4-22-11-updating_{{ context }}"}

To update an {{ product_title }} 4.22 cluster to this latest release, see [Updating a cluster using the CLI](/updating/updating_a_cluster/updating-cluster-cli#updating-cluster-cli).