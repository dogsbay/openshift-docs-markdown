{%- set _mod_docs_content_type = "CONCEPT" %}
# {{ oadp_short }} VMFR file access methods {id="oadp-vmfr-access-methods_{{ context }}"}

Access restored files from virtual machine (VM) backups through a web browser or SSH-based tools. {{ oadp_short }} virtual machine file restore (VMFR) provides access methods that you can configure individually or together. {._abstract}

## Web browser access {id="oadp-vmfr-web-browser-access_{{ context }}"}

The web access method uses a `FileBrowser` container to serve an HTTPS interface for browsing and downloading files. Web browser access provides the following capabilities:

*   Directory navigation across backup versions
*   File preview for common text and image formats
*   Individual file or directory archive downloads
*   Credential management through Kubernetes secrets
*   `ClusterIP` service exposure for internal cluster access
*   Optional external route exposure for access outside the cluster by setting `exposeExternally: true` in the VMFR CR

## SSH-based access {id="_ssh-based_access"}

The SSH access method provides command-line file transfer capabilities through key-based authentication. When you configure `fileAccess.ssh: {}` in the VMFR CR, the controller autogenerates an SSH key pair and stores it in a Kubernetes secret. SSH-based access supports the following tools:

*   `scp` for individual file transfer
*   `sftp` for interactive file browsing sessions
*   `rsync` over SSH for synchronizing files and directories

SSH access uses the following defaults:

*   Default username: `oadp`
*   Default port: `2222`
*   Remote path format: `/restores/<date>/<backup_name>/<vm_name>/<path_to_file>`
*   SSH access uses key-based authentication only. Password-based logins are not supported.