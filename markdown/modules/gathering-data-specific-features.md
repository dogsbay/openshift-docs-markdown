{% if context == "gathering-cluster-data" %}
{%- set from_main_support_section = true -%}
{%- set VirtProductName = "OpenShift Virtualization" -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Gathering data about specific features {id="gathering-data-specific-features_{{ context }}"}

You can gather debugging information about specific features by using the `oc adm must-gather` CLI command with the `--image` or `--image-stream` argument. The `must-gather` tool supports multiple images, so you can gather data about more than one feature by running a single command. {._abstract}

{% if from_main_support_section %}

{% if not openshift_origin %}

***Supported must-gather images***

<table>
<thead>
<tr>
  <th>Image</th>
  <th>Purpose</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>registry.redhat.io/container-native-virtualization/cnv-must-gather-rhel9:v{{ HCOVersion }}</code></td>
  <td>Data collection for {{ VirtProductName }}.</td>
</tr>
<tr>
  <td><code>registry.redhat.io/openshift-serverless-1/svls-must-gather-rhel8</code></td>
  <td>Data collection for OpenShift Serverless.</td>
</tr>
<tr>
  <td><code>registry.redhat.io/openshift-service-mesh/istio-must-gather-rhel8:<installed_version_service_mesh></code></td>
  <td>Data collection for Red Hat OpenShift Service Mesh.</td>
</tr>
<tr>
  <td><code>registry.redhat.io/multicluster-engine/must-gather-rhel8</code></td>
  <td>Data collection for {{ hcp }}.</td>
</tr>
<tr>
  {% if not (openshift_rosa or openshift_dedicated) %}<td><code>registry.redhat.io/odf4/odf-must-gather-rhel9:v<installed_version_ODF></code></td>{% endif %}
  {% if not (openshift_rosa or openshift_dedicated) %}<td>Data collection for {{ rh_storage_first }}.</td>{% endif %}
</tr>
<tr>
  <td><code>registry.redhat.io/openshift-logging/cluster-logging-rhel9-operator:v<installed_version_logging></code></td>
  <td>Data collection for {{ logging }}.</td>
</tr>
<tr>
  <td><code>quay.io/netobserv/must-gather</code></td>
  <td>Data collection for the Network Observability Operator.</td>
</tr>
<tr>
  {% if not (openshift_rosa or openshift_dedicated) %}<td><code>registry.redhat.io/openshift4/ose-local-storage-mustgather-rhel9:v<installed_version_LSO></code></td>{% endif %}
  {% if not (openshift_rosa or openshift_dedicated) %}<td>Data collection for Local Storage Operator.</td>{% endif %}
</tr>
<tr>
  {% if not (openshift_rosa or openshift_dedicated) %}<td><code>registry.redhat.io/openshift-sandboxed-containers/osc-must-gather-rhel8:v<installed_version_sandboxed_containers></code></td>{% endif %}
  {% if not (openshift_rosa or openshift_dedicated) %}<td>Data collection for {{ osc }}.</td>{% endif %}
</tr>
<tr>
  {% if not (openshift_rosa or openshift_dedicated) %}<td><code>registry.redhat.io/workload-availability/node-healthcheck-must-gather-rhel8:v<installed_version_NHC></code></td>{% endif %}
  {% if not (openshift_rosa or openshift_dedicated) %}<td>Data collection for the Red&#160;Hat Workload Availability Operators, including the Self Node Remediation (SNR) Operator, the Fence Agents Remediation (FAR) Operator, the Machine Deletion Remediation (MDR) Operator, the Node Health Check (NHC) Operator, and the Node Maintenance Operator (NMO).</td>{% endif %}
</tr>
<tr>
  {% if not (openshift_rosa or openshift_dedicated) %}<td><code>registry.redhat.io/workload-availability/node-healthcheck-must-gather-rhel9:v<installed_version_NHC></code></td>{% endif %}
  {% if not (openshift_rosa or openshift_dedicated) %}<td>Data collection for the Red&#160;Hat Workload Availability Operators, including the Self Node Remediation (SNR) Operator, the Fence Agents Remediation (FAR) Operator, the Machine Deletion Remediation (MDR) Operator, the Node Health Check (NHC) Operator, and the Node Maintenance Operator (NMO).</td>{% endif %}
</tr>
<tr>
  {% if not (openshift_rosa or openshift_dedicated) %}<td><code>registry.redhat.io/openshift4/numaresources-must-gather-rhel9:v<installed-version-nro></code></td>{% endif %}
  {% if not (openshift_rosa or openshift_dedicated) %}<td>Data collection for the NUMA Resources Operator (NRO).</td>{% endif %}
</tr>
<tr>
  {% if not (openshift_rosa or openshift_dedicated) %}<td><code>registry.redhat.io/openshift4/ptp-must-gather-rhel8:v<installed-version-ptp></code></td>{% endif %}
  {% if not (openshift_rosa or openshift_dedicated) %}<td>Data collection for the PTP Operator.</td>{% endif %}
</tr>
<tr>
  <td><code>registry.redhat.io/openshift-gitops-1/must-gather-rhel8:v<installed_version_GitOps></code></td>
  <td>Data collection for {{ gitops_title }}.</td>
</tr>
<tr>
  <td><code>registry.redhat.io/openshift4/ose-secrets-store-csi-mustgather-rhel9:v<installed_version_secret_store></code></td>
  <td>Data collection for the {{ secrets_store_operator }}.</td>
</tr>
<tr>
  {% if not (openshift_rosa or openshift_dedicated) %}<td><code>registry.redhat.io/lvms4/lvms-must-gather-rhel9:v<installed_version_LVMS></code></td>{% endif %}
  {% if not (openshift_rosa or openshift_dedicated) %}<td>Data collection for the LVM Operator.</td>{% endif %}
</tr>
<tr>
  {% if not (openshift_rosa or openshift_dedicated) %}<td><code>registry.redhat.io/compliance/openshift-compliance-must-gather-rhel8:<digest-version></code></td>{% endif %}
  {% if not (openshift_rosa or openshift_dedicated) %}<td>Data collection for the Compliance Operator.</td>{% endif %}
</tr>
</tbody>
</table>


:::note

To determine the latest version for an {{ product_title }} component’s image, see the [OpenShift Operator Life Cycles](https://access.redhat.com/support/policy/updates/openshift_operators) web page on the Red Hat Customer Portal.

:::


{% endif %}

{% if openshift_origin %}

***Available must-gather images***

<table>
<thead>
<tr>
  <th>Image</th>
  <th>Purpose</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>quay.io/kubevirt/must-gather</code></td>
  <td>Data collection for KubeVirt.</td>
</tr>
<tr>
  <td><code>quay.io/openshift-knative/must-gather</code></td>
  <td>Data collection for Knative.</td>
</tr>
<tr>
  <td><code>docker.io/maistra/istio-must-gather</code></td>
  <td>Data collection for service mesh.</td>
</tr>
<tr>
  <td><code>quay.io/konveyor/must-gather</code></td>
  <td>Data collection for migration-related information.</td>
</tr>
<tr>
  <td><code>quay.io/ocs-dev/ocs-must-gather</code></td>
  <td>Data collection for {{ rh_storage }}.</td>
</tr>
<tr>
  <td><code>quay.io/openshift/origin-cluster-logging-operator</code></td>
  <td>Data collection for OpenShift Logging.</td>
</tr>
<tr>
  {% if not openshift_dedicated %}<td><code>quay.io/openshift/origin-local-storage-mustgather</code></td>{% endif %}
  {% if not openshift_dedicated %}<td>Data collection for Local Storage Operator.</td>{% endif %}
</tr>
<tr>
  <td><code>quay.io/openshift/origin-secrets-store-csi-mustgather</code></td>
  <td>Data collection for the {{ secrets_store_operator }}.</td>
</tr>
</tbody>
</table>

{% endif %}

{% endif %}

**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` role.
{%- if not (openshift_rosa or openshift_dedicated) %}
*   The {{ product_title }} CLI (`oc`) is installed.
{% endif %}
{% if openshift_rosa or openshift_dedicated %}
*   The OpenShift CLI (`oc`) is installed.
{% endif %}

**Procedure**

1.  Navigate to the directory where you want to store the `must-gather` data.

{% if not openshift_origin %}
1.  Run the `oc adm must-gather` command with one or more `--image` or `--image-stream` arguments.

    :::note

    *   To collect the default `must-gather` data in addition to specific feature data, add the `--image-stream=openshift/must-gather` argument.
        {%- if not (openshift_rosa or openshift_dedicated) %}
    *   For information on gathering data about the Custom Metrics Autoscaler, see the Additional resources section that follows.
{%- endif %}
    
    :::


    For example, the following command gathers both the default cluster data and information specific to {{ VirtProductName }}:
    ```terminal
    $ oc adm must-gather \
      --image-stream=openshift/must-gather \
      --image=registry.redhat.io/container-native-virtualization/cnv-must-gather-rhel9:v{{ HCOVersion }}
    ```

    You can use the `must-gather` tool with additional arguments to gather data that is specifically related to OpenShift Logging and the
{%- if not openshift_dedicated %}
    Red Hat OpenShift
{% endif %}
{% if openshift_dedicated %}
    Cluster
{%- endif %}
    Logging Operator in your cluster. For OpenShift Logging, run the following command:
    ```terminal
    $ oc adm must-gather --image=$(oc -n openshift-logging get deployment.apps/cluster-logging-operator \
      -o jsonpath='{.spec.template.spec.containers[?(@.name == "cluster-logging-operator")].image}')
    ```
    ```terminal title="Example must-gather output for OpenShift Logging"
    ├── cluster-logging
    │  ├── clo
    │  │  ├── cluster-logging-operator-74dd5994f-6ttgt
    │  │  ├── clusterlogforwarder_cr
    │  │  ├── cr
    │  │  ├── csv
    │  │  ├── deployment
    │  │  └── logforwarding_cr
    │  ├── collector
    │  │  ├── fluentd-2tr64
{%- if openshift_dedicated %}
    │  ├── curator
    │  │  └── curator-1596028500-zkz4s
{%- endif %}
    │  ├── eo
    │  │  ├── csv
    │  │  ├── deployment
    │  │  └── elasticsearch-operator-7dc7d97b9d-jb4r4
    │  ├── es
    │  │  ├── cluster-elasticsearch
    │  │  │  ├── aliases
    │  │  │  ├── health
    │  │  │  ├── indices
    │  │  │  ├── latest_documents.json
    │  │  │  ├── nodes
    │  │  │  ├── nodes_stats.json
    │  │  │  └── thread_pool
    │  │  ├── cr
    │  │  ├── elasticsearch-cdm-lp8l38m0-1-794d6dd989-4jxms
    │  │  └── logs
    │  │     ├── elasticsearch-cdm-lp8l38m0-1-794d6dd989-4jxms
    │  ├── install
    │  │  ├── co_logs
    │  │  ├── install_plan
    │  │  ├── olmo_logs
    │  │  └── subscription
    │  └── kibana
    │     ├── cr
    │     ├── kibana-9d69668d4-2rkvz
    ├── cluster-scoped-resources
    │  └── core
    │     ├── nodes
    │     │  ├── ip-10-0-146-180.eu-west-1.compute.internal.yaml
    │     └── persistentvolumes
    │        ├── pvc-0a8d65d9-54aa-4c44-9ecc-33d9381e41c1.yaml
    ├── event-filter.html
    ├── gather-debug.log
    └── namespaces
       ├── openshift-logging
       │  ├── apps
       │  │  ├── daemonsets.yaml
       │  │  ├── deployments.yaml
       │  │  ├── replicasets.yaml
       │  │  └── statefulsets.yaml
       │  ├── batch
       │  │  ├── cronjobs.yaml
       │  │  └── jobs.yaml
       │  ├── core
       │  │  ├── configmaps.yaml
       │  │  ├── endpoints.yaml
       │  │  ├── events
{%- if not openshift_dedicated %}
       │  │  │  ├── elasticsearch-im-app-1596020400-gm6nl.1626341a296c16a1.yaml
       │  │  │  ├── elasticsearch-im-audit-1596020400-9l9n4.1626341a2af81bbd.yaml
       │  │  │  ├── elasticsearch-im-infra-1596020400-v98tk.1626341a2d821069.yaml
       │  │  │  ├── elasticsearch-im-app-1596020400-cc5vc.1626341a3019b238.yaml
       │  │  │  ├── elasticsearch-im-audit-1596020400-s8d5s.1626341a31f7b315.yaml
       │  │  │  ├── elasticsearch-im-infra-1596020400-7mgv8.1626341a35ea59ed.yaml
{% endif %}
{% if openshift_dedicated %}
       │  │  │  ├── curator-1596021300-wn2ks.162634ebf0055a94.yaml
       │  │  │  ├── curator.162638330681bee2.yaml
       │  │  │  ├── elasticsearch-delete-app-1596020400-gm6nl.1626341a296c16a1.yaml
       │  │  │  ├── elasticsearch-delete-audit-1596020400-9l9n4.1626341a2af81bbd.yaml
       │  │  │  ├── elasticsearch-delete-infra-1596020400-v98tk.1626341a2d821069.yaml
       │  │  │  ├── elasticsearch-rollover-app-1596020400-cc5vc.1626341a3019b238.yaml
       │  │  │  ├── elasticsearch-rollover-audit-1596020400-s8d5s.1626341a31f7b315.yaml
       │  │  │  ├── elasticsearch-rollover-infra-1596020400-7mgv8.1626341a35ea59ed.yaml
{%- endif %}
       │  │  ├── events.yaml
       │  │  ├── persistentvolumeclaims.yaml
       │  │  ├── pods.yaml
       │  │  ├── replicationcontrollers.yaml
       │  │  ├── secrets.yaml
       │  │  └── services.yaml
       │  ├── openshift-logging.yaml
       │  ├── pods
       │  │  ├── cluster-logging-operator-74dd5994f-6ttgt
       │  │  │  ├── cluster-logging-operator
       │  │  │  │  └── cluster-logging-operator
       │  │  │  │     └── logs
       │  │  │  │        ├── current.log
       │  │  │  │        ├── previous.insecure.log
       │  │  │  │        └── previous.log
       │  │  │  └── cluster-logging-operator-74dd5994f-6ttgt.yaml
       │  │  ├── cluster-logging-operator-registry-6df49d7d4-mxxff
       │  │  │  ├── cluster-logging-operator-registry
       │  │  │  │  └── cluster-logging-operator-registry
       │  │  │  │     └── logs
       │  │  │  │        ├── current.log
       │  │  │  │        ├── previous.insecure.log
       │  │  │  │        └── previous.log
       │  │  │  ├── cluster-logging-operator-registry-6df49d7d4-mxxff.yaml
       │  │  │  └── mutate-csv-and-generate-sqlite-db
       │  │  │     └── mutate-csv-and-generate-sqlite-db
       │  │  │        └── logs
       │  │  │           ├── current.log
       │  │  │           ├── previous.insecure.log
       │  │  │           └── previous.log
{%- if openshift_dedicated %}
       │  │  ├── curator-1596028500-zkz4s
{%- endif %}
       │  │  ├── elasticsearch-cdm-lp8l38m0-1-794d6dd989-4jxms
{%- if not openshift_dedicated %}
       │  │  ├── elasticsearch-im-app-1596030300-bpgcx
       │  │  │  ├── elasticsearch-im-app-1596030300-bpgcx.yaml
{% endif %}
{% if openshift_dedicated %}
       │  │  ├── elasticsearch-delete-app-1596030300-bpgcx
       │  │  │  ├── elasticsearch-delete-app-1596030300-bpgcx.yaml
{%- endif %}
       │  │  │  └── indexmanagement
       │  │  │     └── indexmanagement
       │  │  │        └── logs
       │  │  │           ├── current.log
       │  │  │           ├── previous.insecure.log
       │  │  │           └── previous.log
       │  │  ├── fluentd-2tr64
       │  │  │  ├── fluentd
       │  │  │  │  └── fluentd
       │  │  │  │     └── logs
       │  │  │  │        ├── current.log
       │  │  │  │        ├── previous.insecure.log
       │  │  │  │        └── previous.log
       │  │  │  ├── fluentd-2tr64.yaml
       │  │  │  └── fluentd-init
       │  │  │     └── fluentd-init
       │  │  │        └── logs
       │  │  │           ├── current.log
       │  │  │           ├── previous.insecure.log
       │  │  │           └── previous.log
       │  │  ├── kibana-9d69668d4-2rkvz
       │  │  │  ├── kibana
       │  │  │  │  └── kibana
       │  │  │  │     └── logs
       │  │  │  │        ├── current.log
       │  │  │  │        ├── previous.insecure.log
       │  │  │  │        └── previous.log
       │  │  │  ├── kibana-9d69668d4-2rkvz.yaml
       │  │  │  └── kibana-proxy
       │  │  │     └── kibana-proxy
       │  │  │        └── logs
       │  │  │           ├── current.log
       │  │  │           ├── previous.insecure.log
       │  │  │           └── previous.log
       │  └── route.openshift.io
       │     └── routes.yaml
       └── openshift-operators-redhat
          ├── ...
    ```
{% endif %}
1.  Run the `oc adm must-gather` command with one or more `--image` or `--image-stream` arguments. For example, the following command gathers both the default cluster data and information specific to KubeVirt:
    ```terminal
    $ oc adm must-gather \
     --image-stream=openshift/must-gather \
     --image=quay.io/kubevirt/must-gather
    ```

{% if not openshift_origin %}
1.  Create a compressed file from the `must-gather` directory that was just created in your working directory. Make sure you provide the date and cluster ID for the unique must-gather data. For more information about how to find the cluster ID, see [How to find the cluster-id or name on OpenShift cluster](https://access.redhat.com/solutions/5280291). For example, on a computer that uses a Linux operating system, run the following command:
    ```terminal
    $ tar cvaf must-gather-`date +"%m-%d-%Y-%H-%M-%S"`-<cluster_id>.tar.gz <must_gather_local_dir>
    ```

    where:

    `<must_gather_local_dir>`
    :   Replace with the actual directory name.

1.  Attach the compressed file to your support case on the [the **Customer Support** page](https://access.redhat.com/support/cases/#/case/list) of the Red Hat Customer Portal.
{% endif %}

{% if context == "gathering-cluster-data" %}
{%- set from_main_support_section = false -%}
{%- set VirtProductName = false -%}
{% endif %}