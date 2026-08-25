{%- set _mod_docs_content_type = "REFERENCE" %}
# Supported platforms for {{ oadp_short }} virtual machine data protection {id="oadp-vmdp-supported-platforms_{{ context }}"}

Review the supported guest operating systems and architectures for the {{ oadp_full }} virtual machine data protection (VMDP) command-line interface. This helps you to verify that your VM environment is compatible. {._abstract}

VMDP is built for [{{ VirtProductName }} certified guest operating systems](https://access.redhat.com/articles/4234591) on the following platforms:

**Supported guest operating systems**

| Guest operating system | Architectures |
| --- | --- |
| Red Hat Enterprise Linux | x86_64, AArch64 |
| Microsoft Windows | x86_64, AArch64 |

Each binary is statically linked and includes a SHA256 checksum for integrity verification.