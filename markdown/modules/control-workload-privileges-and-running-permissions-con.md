{%- set _mod_docs_content_type = "CONCEPT" %}
# Control workload privileges and running permissions {id="control-workload-privileges-and-running-permissions-con_{{ context }}"}

Security context constraints (SCCs), pod security admission, and seccomp and SELinux profiles together define what a running workload is allowed to do. Applying them consistently prevents application pods from escalating to root, reaching host resources, or making system calls they do not need.