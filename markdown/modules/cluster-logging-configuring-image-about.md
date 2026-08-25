# Understanding {{ logging }} component images {id="cluster-logging-configuring-image-about_{{ context }}"}

There are several components in {{ logging }}, each one implemented with one or more images. Each image is specified by an environment variable
defined in the **cluster-logging-operator** deployment in the **openshift-logging** project and should not be changed.

You can view the images by running the following command:

```terminal
$ oc -n openshift-logging set env deployment/cluster-logging-operator --list | grep _IMAGE
```

```terminal title="Example output"
FLUENTD_IMAGE=registry.redhat.io/openshift-logging/fluentd-rhel8:latest@sha256:ffdf79da7386871d2bc24cd937e02284b30f85a9979dc8c635fb73021cbca2f3 (1)
```
1.  **FLUENTD_IMAGE** deploys Fluentd.


:::note

Promtail is not officially supported at this time.

:::


The values might be different depending on your environment.