{%- set _mod_docs_content_type = "CONCEPT" %}
# Overview of the backup and restore process for {{ hcp }} on {{ aws_short }} {id="hcp-backup-restore-aws-overview_{{ context }}"}

Get familiar with the backup and restore process for {{ hcp }} on {{ aws_first }}. {._abstract}

The backup and restore process works as follows:

1.  On management cluster 1, which you can think of as the source management cluster, the control plane and workers interact by using the external DNS API. The external DNS API is accessible, and a load balancer sits between the management clusters.
    ![Diagram that shows the workers accessing the external DNS API and the external DNS API pointing to the control plane through a load balancer](/images/298_OpenShift_Backup_Restore_0123_00.png)
1.  You take a snapshot of the hosted cluster, which includes etcd, the control plane, and the worker nodes. During this process, the worker nodes continue to try to access the external DNS API even if it is not accessible, the workloads are running, the control plane is saved in a local manifest file, and etcd is backed up to an S3 bucket. The data plane is active and the control plane is paused.
    ![298_OpenShift_Backup_Restore_0123_01](/images/298_OpenShift_Backup_Restore_0123_01.png)
1.  On management cluster 2, which you can think of as the destination management cluster, you restore etcd from the S3 bucket and restore the control plane from the local manifest file. During this process, the external DNS API is stopped, the hosted cluster API becomes inaccessible, and any workers that use the API are unable to update their manifest files, but the workloads are still running.
    ![298_OpenShift_Backup_Restore_0123_02](/images/298_OpenShift_Backup_Restore_0123_02.png)
1.  The external DNS API is accessible again, and the worker nodes use it to move to management cluster 2. The external DNS API can access the load balancer that points to the control plane.
    ![298_OpenShift_Backup_Restore_0123_03](/images/298_OpenShift_Backup_Restore_0123_03.png)
1.  On management cluster 2, the control plane and worker nodes interact by using the external DNS API. The resources are deleted from management cluster 1, except for the S3 backup of etcd. If you try to set up the hosted cluster again on management cluster 1, it will not work.
    ![298_OpenShift_Backup_Restore_0123_04](/images/298_OpenShift_Backup_Restore_0123_04.png)