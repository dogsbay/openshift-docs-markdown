{%- set _mod_docs_content_type = "PROCEDURE" %}
# Rolling back an image-based upgrade on managed clusters at scale {id="ztp-image-based-upgrade-procedure-rollback_{{ context }}"}

Roll back the changes on a set of managed clusters if you find unresolvable issues after a successful upgrade.
You need to create a separate `ImageBasedGroupUpgrade` CR and define the set of managed clusters that you want to roll back. {._abstract}

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
          image: quay.io/seed/image:4.22.0-rc.1
          version: 4.22.0-rc.1
          pullSecretRef:
            name: "<seed_pull_secret>"
        extraManifests:
          - name: example-extra-manifests
            namespace: openshift-lifecycle-agent
        oadpContent:
          - name: oadp-cm
            namespace: openshift-adp
      plan:
        - actions: ["Rollback", "FinalizeRollback"]
          rolloutStrategy:
            maxConcurrency: 200
            timeout: 2400
    ```
1.  Apply the created file by running the following command on the hub cluster:
    ```terminal
    $ oc apply -f <filename>.yaml
    ```

    All managed clusters that match the defined labels move back to the `Rollback` and then the `Idle` stages to complete the rollback.

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
        - action: Rollback
        - action: FinalizeRollback
        name: spoke4
    # ...
    ```