{%- set _mod_docs_content_type = "CONCEPT" %}
# Limit system calls with seccomp and SELinux security profiles {id="limit-system-calls-with-seccomp-and-selinux-security-profiles-con_{{ context }}"}

Seccomp profiles restrict the system calls a container process can make, and SELinux profiles restrict the host resources it can reach. You can apply the default profiles, write custom ones, or use the Security Profiles Operator to record and distribute profiles across the cluster.