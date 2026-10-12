{%- set _mod_docs_content_type = "CONCEPT" %}
# {{ kueue_name }} workflow overview {id="kueue-workflow-overview_{{ context }}"}

A {{ kueue_name }} workflow coordinates batch administrators, user personas, and existing Kubernetes components so that jobs are admitted only when quota is available. {._abstract}

The {{ kueue_name }} workflow can be described at a high level as follows:

1.  Batch administrators create and configure `ResourceFlavor`, `LocalQueue`, and `ClusterQueue` resources.
1.  User personas create jobs on the cluster.
1.  The Kubernetes API server validates and accepts job data.
1.  {{ kueue_name }} admits jobs based on configured options, such as order or quota. It injects affinity into the job by using resource flavors, and creates a `Workload` object that corresponds to each job.
1.  The applicable controller for the job type creates pods.
1.  The Kubernetes scheduler assigns pods to a node in the cluster.
1.  The Kubernetes cluster autoscaler provisions more nodes as required.