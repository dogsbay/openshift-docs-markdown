{%- set _mod_docs_content_type = "PROCEDURE" %}
# Advanced configuration for the Fluentd log forwarder {id="cluster-logging-collector-tuning_{{ context }}"}

{% include "./snippets/logging-fluentd-dep-snip.md" %}

{{ logging_uc }} includes multiple Fluentd parameters that you can use for tuning the performance of the Fluentd log forwarder. With these parameters, you can change the following Fluentd behaviors:

*   Chunk and chunk buffer sizes
*   Chunk flushing behavior
*   Chunk forwarding retry behavior

Fluentd collects log data in a single blob called a _chunk_. When Fluentd creates a chunk, the chunk is considered to be in the _stage_, where the chunk gets filled with data. When the chunk is full, Fluentd moves the chunk to the _queue_, where chunks are held before being flushed, or written out to their destination. Fluentd can fail to flush a chunk for a number of reasons, such as network issues or capacity issues at the destination. If a chunk cannot be flushed, Fluentd retries flushing as configured.

By default in {{ product_title }}, Fluentd uses the _exponential backoff_ method to retry flushing, where Fluentd doubles the time it waits between attempts to retry flushing again, which helps reduce connection requests to the destination. You can disable exponential backoff and use the _periodic_ retry method instead, which retries flushing the chunks at a specified interval.

These parameters can help you determine the trade-offs between latency and throughput.

*   To optimize Fluentd for throughput, you could use these parameters to reduce network packet count by configuring larger buffers and queues, delaying flushes, and setting longer times between retries. Be aware that larger buffers require more space on the node file system.
*   To optimize for low latency, you could use the parameters to send data as soon as possible, avoid the build-up of batches, have shorter queues and buffers, and use more frequent flush and retries.

You can configure the chunking and flushing behavior using the following parameters in the `ClusterLogging` custom resource (CR). The parameters are then automatically added to the Fluentd config map for use by Fluentd.


:::note

These parameters are:

*   Not relevant to most users. The default settings should give good general performance.
*   Only for advanced users with detailed knowledge of Fluentd configuration and performance.
*   Only for performance tuning. They have no effect on functional aspects of logging.

:::


**Advanced Fluentd Configuration Parameters**

<table>
<thead>
<tr>
  <th>Parameter</th>
  <th>Description</th>
  <th>Default</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>chunkLimitSize</code></td>
  <td>The maximum size of each chunk. Fluentd stops writing data to a chunk when it reaches this size. Then, Fluentd sends the chunk to the queue and opens a new chunk.</td>
  <td><code>8m</code></td>
</tr>
<tr>
  <td><code>totalLimitSize</code></td>
  <td>The maximum size of the buffer, which is the total size of the stage and the queue. If the buffer size exceeds this value, Fluentd stops adding data to chunks and fails with an error. All data not in chunks is lost.</td>
  <td>Approximately 15% of the node disk distributed across all outputs.</td>
</tr>
<tr>
  <td><code>flushInterval</code></td>
  <td>The interval between chunk flushes. You can use <code>s</code> (seconds), <code>m</code> (minutes), <code>h</code> (hours), or <code>d</code> (days).</td>
  <td><code>1s</code></td>
</tr>
<tr>
  <td><code>flushMode</code></td>
  <td>The method to perform flushes:<br><br><ul><li><code>lazy</code>: Flush chunks based on the <code>timekey</code> parameter. You cannot modify the <code>timekey</code> parameter.</li><li><code>interval</code>: Flush chunks based on the <code>flushInterval</code> parameter.</li><li><code>immediate</code>: Flush chunks immediately after data is added to a chunk.</li></ul></td>
  <td><code>interval</code></td>
</tr>
<tr>
  <td><code>flushThreadCount</code></td>
  <td>The number of threads that perform chunk flushing. Increasing the number of threads improves the flush throughput, which hides network latency.</td>
  <td><code>2</code></td>
</tr>
<tr>
  <td><code>overflowAction</code></td>
  <td>The chunking behavior when the queue is full:<br><br><ul><li><code>throw_exception</code>: Raise an exception to show in the log.</li><li><code>block</code>: Stop data chunking until the full buffer issue is resolved.</li><li><code>drop_oldest_chunk</code>: Drop the oldest chunk to accept new incoming chunks. Older chunks have less value than newer chunks.</li></ul></td>
  <td><code>block</code></td>
</tr>
<tr>
  <td><code>retryMaxInterval</code></td>
  <td>The maximum time in seconds for the <code>exponential_backoff</code> retry method.</td>
  <td><code>300s</code></td>
</tr>
<tr>
  <td><code>retryType</code></td>
  <td>The retry method when flushing fails:<br><br><ul><li><code>exponential_backoff</code>: Increase the time between flush retries. Fluentd doubles the time it waits until the next retry until the <code>retry_max_interval</code> parameter is reached.</li><li><code>periodic</code>: Retries flushes periodically, based on the <code>retryWait</code> parameter.</li></ul></td>
  <td><code>exponential_backoff</code></td>
</tr>
<tr>
  <td><code>retryTimeOut</code></td>
  <td>The maximum time interval to attempt retries before the record is discarded.</td>
  <td><code>60m</code></td>
</tr>
<tr>
  <td><code>retryWait</code></td>
  <td>The time in seconds before the next chunk flush.</td>
  <td><code>1s</code></td>
</tr>
</tbody>
</table>

For more information on the Fluentd chunk lifecycle, see [Buffer Plugins](https://docs.fluentd.org/buffer) in the Fluentd documentation.

**Procedure**

1.  Edit the `ClusterLogging` custom resource (CR) in the `openshift-logging` project:
    ```terminal
    $ oc edit ClusterLogging instance
    ```
1.  Add or modify any of the following parameters:
    ```yaml
    apiVersion: logging.openshift.io/v1
    kind: ClusterLogging
    metadata:
      name: instance
      namespace: openshift-logging
    spec:
      collection:
        fluentd:
          buffer:
            chunkLimitSize: 8m (1)
            flushInterval: 5s (2)
            flushMode: interval (3)
            flushThreadCount: 3 (4)
            overflowAction: throw_exception (5)
            retryMaxInterval: "300s" (6)
            retryType: periodic (7)
            retryWait: 1s (8)
            totalLimitSize: 32m (9)
    # ...
    ```
    1.  Specify the maximum size of each chunk before it is queued for flushing.
    1.  Specify the interval between chunk flushes.
    1.  Specify the method to perform chunk flushes: `lazy`, `interval`, or `immediate`.
    1.  Specify the number of threads to use for chunk flushes.
    1.  Specify the chunking behavior when the queue is full: `throw_exception`, `block`, or `drop_oldest_chunk`.
    1.  Specify the maximum interval in seconds for the `exponential_backoff` chunk flushing method.
    1.  Specify the retry type when chunk flushing fails: `exponential_backoff` or `periodic`.
    1.  Specify the time in seconds before the next chunk flush.
    1.  Specify the maximum size of the chunk buffer.
1.  Verify that the Fluentd pods are redeployed:
    ```terminal
    $ oc get pods -l component=collector -n openshift-logging
    ```
1.  Check that the new values are in the `fluentd` config map:
    ```terminal
    $ oc extract configmap/collector-config --confirm
    ```
    ```terminal title="Example fluentd.conf"
    <buffer>
      @type file
      path '/var/lib/fluentd/default'
      flush_mode interval
      flush_interval 5s
      flush_thread_count 3
      retry_type periodic
      retry_wait 1s
      retry_max_interval 300s
      retry_timeout 60m
      queued_chunks_limit_size "#{ENV['BUFFER_QUEUE_LIMIT'] || '32'}"
      total_limit_size "#{ENV['TOTAL_LIMIT_SIZE_PER_BUFFER'] || '8589934592'}"
      chunk_limit_size 8m
      overflow_action throw_exception
      disable_chunk_backup true
    </buffer>
    ```