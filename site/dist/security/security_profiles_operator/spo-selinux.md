---
title: Managing SELinux profiles
---

# Managing SELinux profiles {#spo-selinux}

To control what namespaced workloads can access on {{ op_system }} nodes, use the Security Profiles Operator to create SELinux profiles, bind them to pods, and record policies from running applications.

> [!IMPORTANT]
> The Security Profiles Operator supports only Red Hat Enterprise Linux CoreOS (RHCOS) worker nodes. Red Hat Enterprise Linux (RHEL) nodes are not supported.

## Additional resources {#additional-resources_spo-selinux}

- [Managing security context constraints](/openshift-docs-markdown/authentication/managing-security-context-constraints#managing-pod-security-policies)
- [Managing SCCs in OpenShift](https://cloud.redhat.com/blog/managing-sccs-in-openshift)
- [About security profiles](/openshift-docs-markdown/security/security_profiles_operator/spo-understanding#spo-about_spo-understanding)
- [Use the log enricher](/openshift-docs-markdown/security/security_profiles_operator/spo-advanced#spo-log-enricher_spo-advanced)
- [Pod Security Admission](https://kubernetes.io/docs/concepts/security/pod-security-admission/)
- [Pod Security Standard](https://kubernetes.io/docs/concepts/security/pod-security-standards/#privileged)
