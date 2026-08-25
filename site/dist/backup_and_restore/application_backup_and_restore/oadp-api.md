---
title: APIs used with OADP
---

# APIs used with OADP {#oadp-api}

You can use the following APIs with {{ oadp_short }}:

Velero API
:   Velero API documentation is maintained by Velero and is not maintained by Red Hat.

OADP API
:   The following are the {{ oadp_short }} APIs:

    - `DataProtectionApplicationSpec`
    - `BackupLocation`
    - `SnapshotLocation`
    - `ApplicationConfig`
    - `VeleroConfig`
    - `CustomPlugin`
    - `ResticConfig`
    - `PodConfig`
    - `Features`
    - `DataMover`

## Additional resources {#additional-resources_oadp-api}

- [Velero API types](https://velero.io/docs/main/api-types/)
- [OADP Operator (Go documentation)](https://pkg.go.dev/github.com/openshift/oadp-operator)
- [OADP plugins](/backup_and_restore/application_backup_and_restore/oadp-features-plugins#oadp-features-plugins)
- [Complete schema definitions for the type `PodConfig`](https://pkg.go.dev/github.com/openshift/oadp-operator/api/v1alpha1#PodConfig)
