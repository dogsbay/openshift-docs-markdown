{%- set _mod_docs_content_type = "CONCEPT" %}
# SPIFFE Helper modes {id="zero-trust-manager-spiffe-helper-modes_{{ context }}"}

SPIFFE Helper fetches credentials from the SPIFFE Workload API and writes them to disk for workloads that cannot call the API directly. On {{ product_title }}, a pod typically uses non-daemon mode in an init container for initial certificates and daemon mode in a sidecar to rotate them before expiring. {._abstract}

SPIFFE Helper runs in one of two modes:

*   **Non-daemon mode** (`-daemon-mode=false` or `daemon_mode = false`): Fetches credentials once, writes files, and exits. Use this mode in an init container to bootstrap TLS before the main application starts. In this mode, `cmd` and `renew_signal` are ignored.
*   **Daemon mode** (default): Stays running until the pod is terminated or an unrecoverable error occurs. Watches the Workload API and renews credentials before they expire. Supports `cmd`, `pid_file_name`, `renew_signal`, and optional HTTP health checks. SPIFFE Helper does not background itself like a traditional Unix daemon.

On {{ product_title }}, a typical pod uses both modes:

*   An init container runs SPIFFE Helper in non-daemon mode to populate a shared `emptyDir` volume with initial TLS material.
*   A sidecar container runs SPIFFE Helper in daemon mode to rotate certificates before they expire.
*   The main application container mounts the shared certificate directory and uses the files for TLS.

The SPIFFE workload API is exposed through the SPIFFE container storage interface (CSI), which mounts the Workload API socket into the pod at a path such as `/spiffe-workload-api/spire-agent.sock`.

The following deployment excerpt shows the init container and sidecar pattern on {{ product_title }}:

```yaml
initContainers:
- name: spiffe-helper-init
  image: registry.redhat.io/zero-trust-workload-identity-manager/spiffe-helper-rhel9:<version>
  args:
  - '-config'
  - /etc/spiffe-helper/helper.conf
  - '-daemon-mode=false'
  volumeMounts:
  - name: spiffe-workload-api
    readOnly: true
    mountPath: /spiffe-workload-api
  - name: postgresql-certs
    mountPath: /opt/postgresql-certs
  - name: spiffe-helper
    mountPath: /etc/spiffe-helper
containers:
- name: spiffe-helper
  image: registry.redhat.io/zero-trust-workload-identity-manager/spiffe-helper-rhel9:<version>
  args:
  - '-config'
  - /etc/spiffe-helper/helper.conf
  volumeMounts:
  - name: spiffe-workload-api
    readOnly: true
    mountPath: /spiffe-workload-api
  - name: postgresql-certs
    mountPath: /opt/postgresql-certs
  - name: spiffe-helper
    mountPath: /etc/spiffe-helper
volumes:
- name: spiffe-workload-api
  csi:
    driver: csi.spiffe.io
    readOnly: true
- name: postgresql-certs
  emptyDir:
    medium: Memory
- name: spiffe-helper
  configMap:
    name: spiffe-helper
```

Replace `<version>` with the tag that matches your {{ zero_trust_full }} installation.