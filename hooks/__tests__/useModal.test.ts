import { renderHook, act } from '@testing-library/react-hooks';
import { useModal } from '../useModal';


describe('useModal hook', () => {
  it('should initialize isModalVisible to false', () => {
    const { result } = renderHook(() => useModal());
    
    expect(result.current.isModalVisible).toBe(false);
  });

  it('should set isModalVisible to true when calling showModal', () => {
    const { result } = renderHook(() => useModal());

    act(() => {
      result.current.showModal();
    });

    expect(result.current.isModalVisible).toBe(true);
  });

  it('should set isModalVisible to false when calling hideModal', () => {
    const { result } = renderHook(() => useModal());

    act(() => {
      result.current.hideModal();
    });

    expect(result.current.isModalVisible).toBe(false);
  });

  it('should toggle isModalVisible when calling showModal and hideModal', () => {
    const { result } = renderHook(() => useModal());

    act(() => {
      result.current.showModal();
    });

    expect(result.current.isModalVisible).toBe(true);

    act(() => {
      result.current.hideModal();
    });

    expect(result.current.isModalVisible).toBe(false);
  });
});
