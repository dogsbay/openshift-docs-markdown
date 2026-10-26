{%- set _mod_docs_content_type = "PROCEDURE" %}
# Extending the trusted scheduler image list {id="cnf-extending-trusted-scheduler-images_{{ context }}"}

You can extend the trusted scheduler image list by adding custom scheduler image digests to the `SCHEDULER_IMAGE_DIGESTS` environment variable.
Supply a digest if your upgrade requires a scheduler image from another stream, or if the built-in list is missing the latest scheduler digest release. {._abstract}

**Prerequisites**

*   You are logged in as a user with `cluster-admin` privileges.
*   You have the SHA-256 digest of your custom scheduler image.
*   You have verified the integrity and source of the custom scheduler image.

**Procedure**

1.  Obtain the SHA-256 digest of your custom scheduler image by running the following command:
    ```terminal
    $ oc image info <your_custom_scheduler_image> -o json | jq -r '.digest'
    ```

    Below is an example of the output:
    ```terminal
    sha256:819186877851017bb783d0c291fb990b7136c64a1fac7b031942e4ee1e0c3d53
    ```
1.  Add the digest to the NUMA Resources Operator subscription’s trusted list by running the following command:
    ```terminal
    $ oc patch subscription numaresources-operator \
      -n openshift-numaresources \
      --type=merge \
      -p '{"spec":{"config":{"env":[{"name":"SCHEDULER_IMAGE_DIGESTS","value":"sha256:819186877851017bb783d0c291fb990b7136c64a1fac7b031942e4ee1e0c3d53"}]}}}'
    ```

    :::note

    To add multiple custom digests, use a comma-separated list of digests in the `value` field.

    For example:

    ```terminal
    $ oc patch subscription numaresources-operator \
      -n openshift-numaresources \
      --type=merge \
      -p '{"spec":{"config":{"env":[{"name":"SCHEDULER_IMAGE_DIGESTS","value":"sha256:<digest_1>,sha256:<digest_2>"}]}}}'
    ```
    
    :::

1.  Run the following command with the `-w` option to watch the NUMA Resources Operator pod restart with the new configuration:
    ```terminal
    $ oc get pods -n openshift-numaresources -w
    ```
1.  Update the `NUMAResourcesScheduler` custom resource to use the digest-based image reference by running the following command:
    ```terminal
    $ oc patch numaresourcesscheduler numaresourcesscheduler \
      --type=merge \
      -p '{"spec":{"imageSpec":"<your_registry>/<your_image>@sha256:819186877851017bb783d0c291fb990b7136c64a1fac7b031942e4ee1e0c3d53"}}'
    ```

**Verification**

1.  Verify that the NUMA Resources Operator deployment has the updated trusted image list by running the following command:
    ```terminal
    $ oc get deployment numaresources-controller-manager \
      -n openshift-numaresources \
      -o jsonpath='{.spec.template.spec.containers[0].env[?(@.name=="SCHEDULER_IMAGE_DIGESTS")].value}{"\n"}'
    ```
    ```terminal title="Example output"
    sha256:819186877851017bb783d0c291fb990b7136c64a1fac7b031942e4ee1e0c3d53
    ```
1.  Verify that the scheduler is not in a degraded state by running the following command:
    ```terminal
    $ oc get numaresourcesscheduler numaresourcesscheduler \
      -o jsonpath='{range .status.conditions[?(@.type=="Degraded")]}{.status}{" - "}{.reason}{": "}{.message}{"\n"}{end}'
    ```
    ```terminal title="Example output"
    False - Degraded:
    ```

    A status of `False` means that the scheduler is not degraded.
1.  Verify that the scheduler pods are running with your custom image by running the following command:
    ```terminal
    $ oc get pods -n openshift-numaresources -l app=secondary-scheduler \
      -o jsonpath='{.items[0].spec.containers[0].image}{"\n"}'
    ```