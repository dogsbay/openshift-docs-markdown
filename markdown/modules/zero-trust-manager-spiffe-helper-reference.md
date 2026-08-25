{%- set _mod_docs_content_type = "REFERENCE" %}
# SPIFFE Helper image reference {id="zero-trust-manager-spiffe-helper-reference_{{ context }}"}

Reference information for the SPIFFE Helper container image included with the {{ zero_trust_full }}, including image location, command-line flags, configuration options, and volume requirements. {._abstract}

## Image location {id="zero-trust-manager-spiffe-helper-image-location_{{ context }}"}

The {{ zero_trust_full }} provides a SPIFFE Helper image at the following location:

```text
registry.redhat.io/zero-trust-workload-identity-manager/spiffe-helper-rhel9:<version>
```

Replace `<version>` with the tag that matches your {{ zero_trust_full }} installation. Some workloads require additional tools in the helper image.

## Command-line flags {id="zero-trust-manager-spiffe-helper-cli-flags_{{ context }}"}

| Flag | Description |
| --- | --- |
| `-config <path>` | Path to the SPIFFE Helper configuration file. Required. |
| `-daemon-mode <boolean>` | Controls operating mode. `true` (default) runs continuously and renews credentials. `false` fetches once and exits. |
| `-version` | Prints version information and exits. |

```terminal title="Examples of command-line flags"
$ spiffe-helper -config /etc/spiffe-helper/helper.conf
$ spiffe-helper -config /etc/spiffe-helper/helper.conf -daemon-mode=false
```

## Configuration file options {id="zero-trust-manager-spiffe-helper-config-file-options_{{ context }}"}

SPIFFE Helper reads a configuration file. The following table describes the most common options for X.509 workloads on {{ product_title }}.

| Option | Description |
| --- | --- |
| `agent_address` | Path to the {{ spire_full }} Agent Workload API socket. On Linux, SPIFFE Helper connects with `unix://<path>`. With the SPIFFE CSI driver, use `/spiffe-workload-api/spire-agent.sock`. You can also set the `SPIFFE_ENDPOINT_SOCKET` environment variable. |
| `cert_dir` | Directory where SPIFFE Helper writes credential files. The directory must exist before SPIFFE Helper starts. |
| `daemon_mode` | When `true` (default), runs continuously. When `false`, fetches once and exits. Can also be controlled with the `-daemon-mode` flag. |
| `svid_file_name`, `svid_key_file_name`, `svid_bundle_file_name` | File names for the X.509 SVID certificate, private key, and trust bundle. All three are required to enable X.509 output. |
| `jwt_bundle_file_name` | File name for a JWT bundle JSON file. |
| `jwt_svids` | Block defining JWT SVID audiences and output file names. |
| `cmd` | Executable path for the managed-child pattern. On the first successful X.509 write, SPIFFE Helper starts this process. Ignored in non-daemon mode. |
| `cmd_args` | Space-separated arguments for `cmd`. Use quoted strings for arguments that contain spaces. Not parsed by a shell unless you start a shell explicitly, for example `/bin/sh -c "..."`. |
| `pid_file_name` | Path to a file containing one integer PID for the external-process pattern. Requires `renew_signal`. Invalid in non-daemon mode. |
| `renew_signal` | POSIX signal name sent on renewal, for example `SIGUSR1` or `SIGHUP`. Required when `pid_file_name` is set. Optional with `cmd`; when empty and `cmd` is set, later renewals do not signal the child. |
| `health_checks` | Optional HTTP liveness and readiness endpoints. Available in daemon mode only. |

## Volume and mount requirements {id="zero-trust-manager-spiffe-helper-vol-mount-reqs_{{ context }}"}

When deploying SPIFFE Helper on {{ product_title }}, mount the following resources:

| Volume | Mount path | Access |
| --- | --- | --- |
| SPIFFE Workload API (CSI) | `/spiffe-workload-api` (or path matching `agent_address`) | Read-only |
| SPIFFE Helper configuration (`ConfigMap`) | Path passed to `-config`, for example `/etc/spiffe-helper/helper.conf` | Read-only |
| Certificate directory (`emptyDir` or persistent volume) | Path matching `cert_dir`, for example `/opt/postgresql-certs` or `/certs` | Read/write for the helper; read-only for the application container when possible |

```yaml title="CSI volume example"
apiVersion: apps/v1
metadata:
  name: postgresql-spiffe-client
  namespace: postgresql-spiffe-client
  labels:
    app: postgresql-spiffe-client
# ...
volumes:
- name: spiffe-workload-api
  csi:
    driver: csi.spiffe.io
    readOnly: true
```

```yaml title="Init and sidecar container example"
apiVersion: apps/v1
metadata:
  name: postgresql-spiffe
  namespace: postgresql-spiffe
  labels:
    app: postgresql-spiffe
# ...
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
```

```text title="SPIFFE Helper configuration example"
agent_address = "/spiffe-workload-api/spire-agent.sock"
cert_dir = "/opt/postgresql-certs"
svid_file_name = "svid.pem"
svid_key_file_name = "svid.key"
svid_bundle_file_name = "svid_bundle.pem"
cmd = "/usr/bin/psql"
cmd_args = "-U postgres -h 127.0.0.1 -c \"SELECT pg_reload_conf();\""
renew_signal = ""
```

Replace `<version>` with the tag that matches your {{ zero_trust_full }} installation.

## Quick reference {id="zero-trust-manager-spiffe-helper-quick-reference_{{ context }}"}

| Question | Answer |
| --- | --- |
| What happens if both `cmd` and `pid_file_name` are set? | SPIFFE Helper writes files, then runs managed-child logic, then PID-file logic. There is no priority between them. |
| Is `renew_signal` required for `pid_file_name`? | Yes. Validation fails if `pid_file_name` is set without `renew_signal`. |
| Does SPIFFE Helper watch files for the application? | No. The application watches disk, polls, reads at connection time, or handles signals. |
| What happens in non-daemon mode? | SPIFFE Helper fetches once, writes files, and exits. No watching, `cmd`, or signals. |
| What triggers workload notification? | Only X.509 updates in daemon mode. JWT-only refreshes write files only. |
| Can SPIFFE Helper signal another container in the same pod? | Not by default. Containers use separate process namespaces unless `shareProcessNamespace: true` is set. |