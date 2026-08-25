---
title: Tang server installation considerations
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Tang server installation considerations {id="nbde-tang-server-installation-considerations"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "nbde-implementation" %}

Network-Bound Disk Encryption (NBDE) must be enabled when a cluster node is installed. However, you can change the disk encryption policy at any time after it was initialized at installation.

{% leveloffset +1 %}{% include "./modules/nbde-installation-scenarios.md" %}{% endleveloffset %}

## Installing a Tang server {id="nbde-installing-a-tang-server_{{ context }}"}

To deploy one or more Tang servers, you can choose from the following options depending on your scenario:

1.  [Deploying a Tang server using the NBDE Tang Server Operator](/security/nbde_tang_server_operator/nbde-tang-server-operator-configuring-managing#deploying-nbde-tang-server_configuring-and-managing-nbde-tang-server-operator)
1.  [Deploying a Tang server with SELinux in enforcing mode on RHEL systems](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/security_hardening/configuring-automated-unlocking-of-encrypted-volumes-using-policy-based-decryption_security-hardening#deploying-a-tang-server-with-selinux-in-enforcing-mode_configuring-automated-unlocking-of-encrypted-volumes-using-policy-based-decryption)
1.  [Configuring a Tang server in the RHEL web console](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/security_hardening/configuring-automated-unlocking-of-encrypted-volumes-using-policy-based-decryption_security-hardening#configuring-automated-unlocking-using-a-tang-key-in-the-web-console_configuring-automated-unlocking-of-encrypted-volumes-using-policy-based-decryption)
1.  [Deploying Tang as a container](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/security_hardening/configuring-automated-unlocking-of-encrypted-volumes-using-policy-based-decryption_security-hardening#proc_deploying-tang-as-a-container_configuring-automated-unlocking-of-encrypted-volumes-using-policy-based-decryption)
1.  [Using the nbde_server System Role for setting up multiple Tang servers](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/security_hardening/configuring-automated-unlocking-of-encrypted-volumes-using-policy-based-decryption_security-hardening#using-the-nbde_server-system-role-for-setting-up-multiple-tang-servers_configuring-automated-unlocking-of-encrypted-volumes-using-policy-based-decryption)

{% leveloffset +2 %}{% include "./modules/nbde-compute-requirements.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nbde-automatic-start-at-boot.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nbde-http-versus-https.md" %}{% endleveloffset %}

**Additional resources**

*   [Configuring automated unlocking of encrypted volumes using policy-based decryption](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/security_hardening/configuring-automated-unlocking-of-encrypted-volumes-using-policy-based-decryption_security-hardening)
*   [Official Tang server container](https://catalog.redhat.com/software/containers/detail/5fbc405674aa0cc23b445f8f?container-tabs=overview&gti-tabs=registry-tokens)
*   [Encrypting and mirroring disks during installation](/installing/install_config/installing-customizing#installation-special-config-storage_installing-customizing)