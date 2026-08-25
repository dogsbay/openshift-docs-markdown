{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a NodeFeatureDiscovery CR by using the CLI in a disconnected environment {id="creating-nfd-cr-cli-disconnected_{{ context }}"}

Create a `NodeFeatureDiscovery` CR instance in a disconnected environment by using the {{ oc_first }} and a mirror registry to deploy the NFD operand without direct internet access. {._abstract}

**Prerequisites**

*   You have access to an {{ product_title }} cluster.
*   You installed the {{ oc_first }}.
*   You logged in as a user with `cluster-admin` privileges.
*   You installed the NFD Operator.
*   You have access to a mirror registry with the required images.
*   You installed the `skopeo` CLI tool.

**Procedure**

1.  Determine the digest of the registry image:
    1.  Run the following command:
        ```terminal
        $ skopeo inspect docker://registry.redhat.io/openshift4/ose-node-feature-discovery:<openshift_version>
        ```
        ```terminal title="Example command"
        $ skopeo inspect docker://registry.redhat.io/openshift4/ose-node-feature-discovery:v4.12
        ```
    1.  Inspect the output to identify the image digest:
        ```terminal title="Example output"
        {
          ...
          "Digest": "sha256:1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
          ...
        }
        ```
1.  Use the `skopeo` CLI tool to copy the image from `registry.redhat.io` to your mirror registry, by running the following command:
    ```terminal
    $ skopeo copy docker://registry.redhat.io/openshift4/ose-node-feature-discovery@<image_digest> docker://<mirror_registry>/openshift4/ose-node-feature-discovery@<image_digest>
    ```
    ```terminal title="Example command"
    $ skopeo copy docker://registry.redhat.io/openshift4/ose-node-feature-discovery@sha256:1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef docker://<your_mirror_registry>/openshift4/ose-node-feature-discovery@sha256:1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef
    ```
1.  Create a `NodeFeatureDiscovery` CR:
    ```yaml title="Example NodeFeatureDiscovery CR"
    apiVersion: nfd.openshift.io/v1
    kind: NodeFeatureDiscovery
    metadata:
      name: nfd-instance
    spec:
      operand:
        image: <mirror_registry>/openshift4/ose-node-feature-discovery@<image_digest>
        imagePullPolicy: Always
      workerConfig:
        configData: |
          core:
          #  labelWhiteList:
          #  noPublish: false
            sleepInterval: 60s
          #  sources: [all]
          #  klog:
          #    addDirHeader: false
          #    alsologtostderr: false
          #    logBacktraceAt:
          #    logtostderr: true
          #    skipHeaders: false
          #    stderrthreshold: 2
          #    v: 0
          #    vmodule:
          ##   NOTE: the following options are not dynamically run-time configurable
          ##         and require a nfd-worker restart to take effect after being changed
          #    logDir:
          #    logFile:
          #    logFileMaxSize: 1800
          #    skipLogHeaders: false
          sources:
            cpu:
              cpuid:
          #     NOTE: whitelist has priority over blacklist
                attributeBlacklist:
                  - "BMI1"
                  - "BMI2"
                  - "CLMUL"
                  - "CMOV"
                  - "CX16"
                  - "ERMS"
                  - "F16C"
                  - "HTT"
                  - "LZCNT"
                  - "MMX"
                  - "MMXEXT"
                  - "NX"
                  - "POPCNT"
                  - "RDRAND"
                  - "RDSEED"
                  - "RDTSCP"
                  - "SGX"
                  - "SSE"
                  - "SSE2"
                  - "SSE3"
                  - "SSE4.1"
                  - "SSE4.2"
                  - "SSSE3"
                attributeWhitelist:
            kernel:
              kconfigFile: "/path/to/kconfig"
              configOpts:
                - "NO_HZ"
                - "X86"
                - "DMI"
            pci:
              deviceClassWhitelist:
                - "0200"
                - "03"
                - "12"
              deviceLabelFields:
                - "class"
      customConfig:
        configData: |
              - name: "more.kernel.features"
                matchOn:
                - loadedKMod: ["example_kmod3"]
    ```

    where:

    `operand.image`
    :   Specifies the required operand image.

1.  Create the `NodeFeatureDiscovery` CR by running the following command:
    ```terminal
    $ oc apply -f <filename>
    ```

**Verification**

1.  Check the status of the `NodeFeatureDiscovery` CR by running the following command:
    ```terminal
    $ oc get nodefeaturediscovery nfd-instance -o yaml
    ```
1.  Check that the pods are running without `ImagePullBackOff` errors by running the following command:
    ```terminal
    $ oc get pods -n <nfd_namespace>
    ```