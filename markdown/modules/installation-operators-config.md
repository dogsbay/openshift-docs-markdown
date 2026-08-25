{%- set _mod_docs_content_type = "PROCEDURE" %}
# Initial Operator configuration {id="installation-operators-config_{{ context }}"}

After the control plane initializes, you must immediately configure some Operators so that they all become available. {._abstract}

**Prerequisites**

*   Your control plane has initialized.

**Procedure**

1.  Watch the cluster components come online:
    ```terminal
    $ watch -n5 oc get clusteroperators
    ```
    ```terminal title="Example output" {minja}
    NAME                                       VERSION   AVAILABLE   PROGRESSING   DEGRADED   SINCE
    authentication                             {{ product_version }}.0    True        False         False      19m
    baremetal                                  {{ product_version }}.0    True        False         False      37m
    cloud-credential                           {{ product_version }}.0    True        False         False      40m
    cluster-autoscaler                         {{ product_version }}.0    True        False         False      37m
    config-operator                            {{ product_version }}.0    True        False         False      38m
    console                                    {{ product_version }}.0    True        False         False      26m
    csi-snapshot-controller                    {{ product_version }}.0    True        False         False      37m
    dns                                        {{ product_version }}.0    True        False         False      37m
    etcd                                       {{ product_version }}.0    True        False         False      36m
    image-registry                             {{ product_version }}.0    True        False         False      31m
    ingress                                    {{ product_version }}.0    True        False         False      30m
    insights                                   {{ product_version }}.0    True        False         False      31m
    kube-apiserver                             {{ product_version }}.0    True        False         False      26m
    kube-controller-manager                    {{ product_version }}.0    True        False         False      36m
    kube-scheduler                             {{ product_version }}.0    True        False         False      36m
    kube-storage-version-migrator              {{ product_version }}.0    True        False         False      37m
    machine-api                                {{ product_version }}.0    True        False         False      29m
    machine-approver                           {{ product_version }}.0    True        False         False      37m
    machine-config                             {{ product_version }}.0    True        False         False      36m
    marketplace                                {{ product_version }}.0    True        False         False      37m
    monitoring                                 {{ product_version }}.0    True        False         False      29m
    network                                    {{ product_version }}.0    True        False         False      38m
    node-tuning                                {{ product_version }}.0    True        False         False      37m
    openshift-apiserver                        {{ product_version }}.0    True        False         False      32m
    openshift-controller-manager               {{ product_version }}.0    True        False         False      30m
    openshift-samples                          {{ product_version }}.0    True        False         False      32m
    operator-lifecycle-manager                 {{ product_version }}.0    True        False         False      37m
    operator-lifecycle-manager-catalog         {{ product_version }}.0    True        False         False      37m
    operator-lifecycle-manager-packageserver   {{ product_version }}.0    True        False         False      32m
    service-ca                                 {{ product_version }}.0    True        False         False      38m
    storage                                    {{ product_version }}.0    True        False         False      37m
    ```
1.  Configure the Operators that are not available.