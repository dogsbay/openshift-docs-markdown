---
title: Advanced Audit Logging Framework
---

# Advanced Audit Logging Framework {#spo-audit-logging}

With the Advanced Audit Logging Framework in the OpenShift Container Platform Security Profiles Operator (SPO), you can correlate cluster users with actions during `oc exec`, `oc rsh`, and `oc debug` sessions.

The Advanced Audit Logging Framework in SPO 0.10.0 logs activity from an {{ op_system_first }} container back to the hosting cluster and produces detailed logs in a JSON Lines format.

## Benefits of the Advanced Audit Logging Framework {#benefits-of-adv-aud-log_spo-audit-logging}

The `kubectl exec`, `oc exec`, `oc rsh` and `oc debug` commands do not pass user authentication details into the exec session on the container, making it hard to correlate Kubernetes user actions caused by actions on the host. The audit logger in SPO addresses this with mutating webhooks that inject the request UID from the Kubernetes API server as an environment variable into the session. Every request to the API server including the request to start a new exec session has a request UID. This request UID is then logged by the Advanced Audit Logging Framework. The request ID is used to correlate the activity with the API server audit logs, providing an audit trail within the node.

With the addition of the Advanced Audit Logging Framework, SPO now has two use cases:

```
* Pod auditing
* Node auditing
```

The use of privileged `seccompProfile` configuration is required only for the case of node auditing.

> [!NOTE]
> The Security Profiles Operator supports only {{ op_system_first }} worker nodes appropriate to the version of OpenShift Container Platform in use.
>
> Red Hat Enterprise Linux (RHEL) nodes are not supported.

## Performance considerations {#performance-considerations_spo-audit-logging}

It is important to consider the performance cost of using seccomp profiles for extensive logging. SPO is designed to minimize this impact by primarily logging only process creations and handling them asynchronously. This approach helps prevent logging from becoming a bottleneck on your nodes.

The Advanced Audit Logging feature uses eBPF as a supplemental data source. While it is possible for eBPF to be used as a primary data source for this type of logging, that functionality is not currently a configurable feature within the Operator. For most use cases, the default asynchronous, process-creation-focused logging approach provides an excellent balance between security visibility and cluster performance.

## Prerequisites for the Advanced Audit Logging Framework {#prereq-adv-audit-logging_spo-audit-logging}

Before enabling the Advanced Audit Logging Framework, ensure the following requirements are met.

Security Profiles Operator version 0.10.0 or later is installed. The Advanced Audit Logging Framework requires Security Profiles Operator version 0.10.0 or later.

For node debugging sessions:

```
* To audit `oc debug` node sessions, CRI-O version 1.33 or later is required. It is available in OpenShift Container Platform 4.20 or later.
* The --privileged-seccomp-profile flag must be configured in CRI-O to apply `seccompProfiles` to privileged containers.
* The supported Linux used with the Advanced Audit Logging Framework is {{ op_system_first }} running in a container in OpenShift Container Platform 4.20 or later.
```

If you are using the CRI-O runtime, you must configure it to allow `seccompProfile` to be applied to privileged containers. Add the following flag to your CRI-O runtime configuration: `--privileged-seccomp-profile=/var/lib/kubelet/seccomp/operator/profile1.json`. This is explained in more detail in the Advanced Audit Logging installation and enablement steps. The `--privileged-seccomp-profile` flag is available starting with OpenShift Container Platform 4.20 and later.

If you are using any version of SPO before 0.9.0, you must perform a migration procedure to install versions 0.9.0 or 0.10.0. The migration procedure converts SPO to operate on cluster-scoped resources.

First-time installation of SPO version 0.10.0 does not require migration. Also, if you are currently on SPO 0.9.0, you do not require migration and can directly upgrade to SPO 0.10.0.

> [!IMPORTANT]
> Do not attempt to upgrade directly from SPO versions before 0.9.0 to either 0.9.0 or 0.10.0 if you are currently running SPO. You must perform the migration procedure to convert SPO for operation at the cluster level.
>
> This change allows Advanced Audit Logging of events inside the worker node.
>
> This capability is not provided for control nodes since SPO does not operate on `etcd` nodes.

## Additional resources {#additional-resources_spo-audit-logging}

- [About security profiles](/openshift-docs-markdown/security/security_profiles_operator/spo-understanding#spo-about_spo-understanding)
- [Installing the Security Profiles Operator](/openshift-docs-markdown/security/security_profiles_operator/spo-enabling#spo-installing_spo-enabling)
- [Migration procedure](https://access.redhat.com/articles/7130594)
- [Use the log enricher](/openshift-docs-markdown/security/security_profiles_operator/spo-advanced#spo-log-enricher_spo-advanced)
- [Troubleshooting the Security Profiles Operator](/openshift-docs-markdown/security/security_profiles_operator/spo-troubleshooting#spo-inspecting-seccomp-profiles_spo-troubleshooting)
- [Uninstalling SPO](/openshift-docs-markdown/security/security_profiles_operator/spo-uninstalling#spo-uninstalling)
