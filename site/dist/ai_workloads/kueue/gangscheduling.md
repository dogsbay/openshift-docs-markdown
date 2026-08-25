---
title: Gang scheduling
---

# Gang scheduling {#gangscheduling}

You can use gang scheduling to ensure that a group, or gang, of related jobs starts only when all required resources are available.

{{ kueue_name }} enables gang scheduling by suspending jobs until the OpenShift Container Platform cluster can guarantee the capacity to start and execute all of the related jobs in the *gang* together. This is also known as *all-or-nothing* scheduling.

Gang scheduling is important if you are working with expensive, limited resources, such as GPUs. Gang scheduling can prevent jobs from claiming but not using GPUs, which can improve GPU utilization and can reduce running costs. Gang scheduling can also help to prevent issues like resource segmentation and deadlocking.

## Additional resources {#additional-resources_gangscheduling}

- [Creating a Kueue custom resource](/openshift-docs-markdown/ai_workloads/kueue/install-kueue#create-kueue-cr_install-kueue)
