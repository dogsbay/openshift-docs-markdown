{%- set _mod_docs_content_type = "PROCEDURE" %}
# Performing a dry run {id="oc-mirror-dry-run_{{ context }}"}

You can use `oc-mirror` to perform a dry run, without actually mirroring any images. By doing this task, you can review the list of images that would be mirrored and any images that would be pruned from the mirror registry. By doing a dry run, you can catch any errors with your image set configuration early or use the generated list of images with other tools to carry out the mirroring operation. {._abstract}

**Prerequisites**

*   You have access to the internet to obtain the necessary container images.
*   You have installed the {{ oc_first }}.
*   You have installed the oc-mirror CLI plugin.
*   You have created the image set configuration file.

**Procedure**

1.  Run the `oc mirror` command with the `--dry-run` flag to perform a dry run:
    ```terminal
    $ oc mirror --config=./imageset-config.yaml \
      docker://registry.example:5000            \
      --dry-run                                 \
      --v1
    ```

    where:

    `--config=`
    :   Specifies passing in the image set configuration file that was created. This procedure assumes that it is named `imageset-config.yaml`.

    `docker`
    :   Specifies the mirror registry. Nothing is mirrored to this registry if you use the `--dry-run` flag.

    `--dry-run`
    :   Specifies using the `--dry-run` flag to generate the dry run artifacts and not an actual image set file.
    ```terminal title="Example output"
    Checking push permissions for registry.example:5000
    Creating directory: oc-mirror-workspace/src/publish
    Creating directory: oc-mirror-workspace/src/v2
    Creating directory: oc-mirror-workspace/src/charts
    Creating directory: oc-mirror-workspace/src/release-signatures
    No metadata detected, creating new workspace
    wrote mirroring manifests to oc-mirror-workspace/operators.1658342351/manifests-redhat-operator-index

    ...

    info: Planning completed in 31.48s
    info: Dry run complete
    Writing image mapping to oc-mirror-workspace/mapping.txt
    ```

1.  Navigate into the workspace directory that was generated:
    ```terminal
    $ cd oc-mirror-workspace/
    ```
1.  Review the `mapping.txt` file that was generated.

    This file contains a list of all images that would be mirrored.
1.  Review the `pruning-plan.json` file that was generated.

    This file contains a list of all images that would be pruned from the mirror registry when the image set is published.

    :::note

    The `pruning-plan.json` file is only generated if your oc-mirror command points to your mirror registry and there are images to be pruned.
    
    :::