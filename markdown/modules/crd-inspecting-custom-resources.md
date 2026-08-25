{%- set _mod_docs_content_type = "PROCEDURE" %}
# Inspecting custom resources {id="crd-inspecting-custom-resources_{{ context }}"}

You can inspect custom resource (CR) objects that exist in your cluster using the CLI. {._abstract}

**Prerequisites**

*   A CR object exists in a namespace to which you have access.

**Procedure**

1.  To get information on a specific kind of a CR, run:
    ```terminal
    $ oc get <kind>
    ```

    For example:
    ```terminal
    $ oc get crontab
    ```
    ```terminal title="Example output"
    NAME                 KIND
    my-new-cron-object   CronTab.v1.stable.example.com
    ```

    Resource names are not case-sensitive, and you can use either the singular or plural forms defined in the CRD, as well as any short name. For example:
    ```terminal
    $ oc get crontabs
    ```
    ```terminal
    $ oc get crontab
    ```
    ```terminal
    $ oc get ct
    ```
1.  You can also view the raw YAML data for a CR:
    ```terminal
    $ oc get <kind> -o yaml
    ```

    For example:
    ```terminal
    $ oc get ct -o yaml
    ```
    ```terminal title="Example output"
    apiVersion: v1
    items:
    - apiVersion: stable.example.com/v1
      kind: CronTab
      metadata:
        clusterName: ""
        creationTimestamp: 2017-05-31T12:56:35Z
        deletionGracePeriodSeconds: null
        deletionTimestamp: null
        name: my-new-cron-object
        namespace: default
        resourceVersion: "285"
        selfLink: /apis/stable.example.com/v1/namespaces/default/crontabs/my-new-cron-object
        uid: 9423255b-4600-11e7-af6a-28d2447dc82b
      spec:
        cronSpec: '* * * * /5'
        image: my-awesome-cron-image
    ```

    The `spec` section in the output displays the custom configuration settings, such as `cronSpec` and `image`, that you defined when creating the object.