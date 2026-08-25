---
title: Managing Compliance Operator result and remediation
---

# Managing Compliance Operator result and remediation {#compliance-operator-remediation}

You can review compliance scan results and apply remediations to resolve failing rules. Remediations are not applied automatically, so you can verify each change before applying it to your cluster.

> [!IMPORTANT]
> Full remediation for Federal Information Processing Standards (FIPS) compliance requires enabling FIPS mode for the cluster. To enable FIPS mode, you must run the installation program from a {{ op_system_base_full }} computer configured to operate in FIPS mode. For more information about configuring FIPS mode on RHEL, see Installing the system in FIPS mode.
>
> FIPS mode is supported on the following architectures:
>
> - `x86_64`
> - `ppc64le`
> - `s390x`

## Additional resources {#additional-resources_compliance-remediation}

- [Modifying nodes](/openshift-docs-markdown/nodes/nodes/nodes-nodes-managing#nodes-nodes-managing-about_nodes-nodes-managing)
- [Ignition specification](https://coreos.github.io/ignition/specs/)
- [Installing the system in FIPS mode](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html/security_hardening/assembly_installing-the-system-in-fips-mode_security-hardening)
