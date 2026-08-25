---
title: Configuring seccomp profiles
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Configuring seccomp profiles {id="seccomp-profiles"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "configuring-seccomp-profiles" %}

An {{ product_title }} container or a pod runs a single application that performs one or more well-defined tasks. The application usually requires only a small subset of the underlying operating system kernel APIs.
Secure computing mode, seccomp, is a  Linux kernel feature that can be used to limit the process running in a container to only using a subset of the available system calls.

The `restricted-v2` SCC applies to all newly created pods in {{ product_version }}. The default seccomp profile `runtime/default` is applied to these pods.

Seccomp profiles are stored as JSON files on the disk.


:::important

Seccomp profiles cannot be applied to privileged containers.

:::


{% leveloffset +1 %}{% include "./modules/configuring-default-seccomp-profile.md" %}{% endleveloffset %}

## Configuring a custom seccomp profile {id="custom-seccomp-profile"}
You can configure a custom seccomp profile, which allows you to update the filters based on the application requirements. This allows cluster administrators to have greater control over the security of workloads running in OpenShift Container Platform.

Seccomp security profiles list the system calls (syscalls) a process can make. Permissions are broader than SELinux, which restrict operations, such as `write`, system-wide.

{% leveloffset +2 %}{% include "./modules/creating-custom-seccomp-profile.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/setting-custom-seccomp-profile.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/applying-custom-seccomp-profile.md" %}{% endleveloffset %}

During deployment, the admission controller validates the following:

*   The annotations against the current SCCs allowed by the user role.
*   The SCC, which includes the seccomp profile, is allowed for the pod.

If the SCC is allowed for the pod, the kubelet runs the pod with the specified seccomp profile.


:::important

Ensure that the seccomp profile is deployed to all worker nodes.

:::



:::note

The custom SCC must have the appropriate priority to be automatically assigned to the pod or meet other conditions required by the pod, such as allowing CAP_NET_ADMIN.

:::


## Additional resources {id="additional-resources_configuring-seccomp-profiles"}
*   [Managing security context constraints](/authentication/managing-security-context-constraints)
*   [Machine Config Overview](/machine_configuration/index#machine-config-overview)