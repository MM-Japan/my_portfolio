class PagesController < ApplicationController
  def home
  end

  def secrets
  end

  def chrono_crow
    public_root = Rails.root.join('public')
    candidate_dir = Dir.glob(public_root.join('*')).find do |path|
      File.directory?(path) && File.basename(path).downcase.include?('chronocrow')
    end

    chrono_dir = Pathname(candidate_dir || public_root.join('ChronoCrow'))
    relative_root = chrono_dir.relative_path_from(public_root).to_s
    @chronocrow_root_path = "/#{relative_root}".gsub(%r{//+}, '/')

    build_dir = chrono_dir.join('Build')
    loader_file = build_dir.exist? ? Dir.glob(build_dir.join('*.loader.js')).first : nil
    build_basename = loader_file ? File.basename(loader_file, '.loader.js') : 'ChronoCrow'

    @chronocrow_loader_path = File.join(@chronocrow_root_path, 'Build', "#{build_basename}.loader.js")
    @chronocrow_data_path = File.join(@chronocrow_root_path, 'Build', "#{build_basename}.data")
    @chronocrow_framework_path = File.join(@chronocrow_root_path, 'Build', "#{build_basename}.framework.js")
    @chronocrow_wasm_path = File.join(@chronocrow_root_path, 'Build', "#{build_basename}.wasm")
    @chronocrow_streaming_assets_path = File.join(@chronocrow_root_path, 'StreamingAssets')
  end
end
