{%- set _mod_docs_content_type = "PROCEDURE" %}
# Canceling an image-based upgrade on managed clusters at scale {id="ztp-image-based-upgrade-procedure-cancel_{{ context }}"}

You can cancel the upgrade on a set of managed clusters that completed the `Prep` stage. {._abstract}

{% include "./snippets/ibu-supported-action-combinations.md" %}

**Prerequisites**

*   You have logged in to the hub cluster as a user with `cluster-admin` privileges.

**Procedure**

1.  Create a separate YAML file on the hub cluster that has the `ImageBasedGroupUpgrade` CR:
    ```yaml
    apiVersion: lcm.openshift.io/v1alpha1
    kind: ImageBasedGroupUpgrade
    metadata:
      name: <filename>
      namespace: default
    spec:
      clusterLabelSelectors:
        - matchExpressions:
          - key: name
            operator: In
            values:
            - spoke4
      ibuSpec:
        seedImageRef:
          image: quay.io/seed/image:4.16.0-rc.1
          version: 4.16.0-rc.1
          pullSecretRef:
            name: "<seed_pull_secret>"
        extraManifests:
          - name: example-extra-manifests
            namespace: openshift-lifecycle-agent
        oadpContent:
          - name: oadp-cm
            namespace: openshift-adp
      plan:
        - actions: ["Abort"]
          rolloutStrategy:
            maxConcurrency: 5
            timeout: 10
    ```

    All managed clusters that completed the `Prep` stage move back to the `Idle` stage. 
1.  Apply the created file by running the following command on the hub cluster:
    ```terminal
    $ oc apply -f <filename>.yaml
    ```

**Verification**

*   Monitor the status updates by running the following command:
    ```terminal
    $ oc get ibgu -o yaml
    ```

    ```yaml title="Example output"
    # ...
    status:
      clusters:
      - completedActions:
        - action: Prep
        currentActions:
        - action: Abort
        name: spoke4
    # ...
    ```